import { Customer } from "./models/Customer";
import { Portfolio } from "./models/Portfolio";
import { Deposit } from "./models/Deposit";
import { DepositPlan } from "./models/DepositPlan";

import { ICustomer } from "./interfaces/models/ICustomer";
import { IPortfolio } from "./interfaces/models/IPortfolio";
import { IDeposit } from "./interfaces/models/IDeposit";
import { IDepositPlan } from "./interfaces/models/IDepositPlan";

import { Settings } from "./constants/Settings";

import { DepositPlanTypes } from "./enums/DepositPlanTypes";

function addPortfolios(customer: ICustomer, portfolios: IPortfolio[]) {
  var customer_portfolios = customer.getPortfolios();
  customer.setPortfolios(customer_portfolios.concat(portfolios));
}

function addPortfolio(customer: ICustomer, portfolio: IPortfolio) {
  var customer_portfolios = customer.getPortfolios();
  customer_portfolios.push(portfolio);
  customer.setPortfolios(customer_portfolios);
}

function depositFund(customer: ICustomer, depositPlan: IDepositPlan) {
  var customerDepositPlans = customer.getDepositPlans();

  if (customerDepositPlans.length < Settings.MAX_DEPOSIT_PLAN) {
    depositPlan.getDeposits().forEach((deposit: IDeposit) => {
      var portfolio = deposit.getPortfolio();
      var currentBalance = portfolio.getBalance();
      var newBalance = currentBalance + deposit.getAmount();
      portfolio.setBalance(newBalance);
    });

    customerDepositPlans.push(depositPlan);
    customer.setDepositPlans(customerDepositPlans);
  } else {
    console.log("You've reached the maximum limit of deposit plan.");
  }
}

var customer = new Customer("Jay");
var highRiskPortfolio = new Portfolio("High risk");
var retirementPortfolio = new Portfolio("Retirement");

console.log(customer);
console.log(highRiskPortfolio);
console.log(retirementPortfolio);

addPortfolios(customer, [highRiskPortfolio, retirementPortfolio]);
// addPortfolio(customer, retirementPortfolio);

var depositPlan1 = new DepositPlan(DepositPlanTypes.ONE_TIME, [
  new Deposit(highRiskPortfolio, 10000),
  new Deposit(retirementPortfolio, 500),
]);
depositFund(customer, depositPlan1);
console.log("depositPlan1", depositPlan1.toJSON());

var depositPlan2 = new DepositPlan(DepositPlanTypes.MONTHLY, [
  new Deposit(highRiskPortfolio, 0),
  new Deposit(retirementPortfolio, 100),
]);
depositFund(customer, depositPlan2);
console.log("depositPlan2", depositPlan2.toJSON());

var depositPlan3 = new DepositPlan(DepositPlanTypes.MONTHLY, [
  new Deposit(highRiskPortfolio, 0),
  new Deposit(retirementPortfolio, 100),
]);
depositFund(customer, depositPlan3);
console.log("depositPlan3", depositPlan3.toJSON());

console.log("customer", customer.toJSON());

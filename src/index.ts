import { Customer } from "./models/Customer";
import { Portfolio } from "./models/Portfolio";
import { Deposit } from "./models/Deposit";
import { DepositPlan } from "./models/DepositPlan";

import { DepositPlanTypes } from "./enums/DepositPlanTypes";
import { PortfolioService } from "./services/PortfolioService";
import { DepositService } from "./services/DepositService";

var customer = new Customer("Jay");
var highRiskPortfolio = new Portfolio("High risk");
var retirementPortfolio = new Portfolio("Retirement");

console.log(customer);
console.log(highRiskPortfolio);
console.log(retirementPortfolio);

var portfolioService1 = new PortfolioService(customer, highRiskPortfolio);
portfolioService1.addPortfolio();

var portfolioService2 = new PortfolioService(customer, retirementPortfolio);
portfolioService2.addPortfolio();

// Deposit service should complain error if portfolio not added yet
var depositPlan1 = new DepositPlan(DepositPlanTypes.ONE_TIME, [
  new Deposit(highRiskPortfolio, 10000),
  new Deposit(retirementPortfolio, 500),
]);

var depositService = new DepositService(customer, depositPlan1);
depositService.depositFund();
console.log("depositPlan1", depositPlan1.toJSON());

var depositPlan2 = new DepositPlan(DepositPlanTypes.MONTHLY, [
  new Deposit(highRiskPortfolio, 0),
  new Deposit(retirementPortfolio, 100),
]);

var depositService = new DepositService(customer, depositPlan2);
depositService.depositFund();
console.log("depositPlan2", depositPlan2.toJSON());

var depositPlan3 = new DepositPlan(DepositPlanTypes.MONTHLY, [
  new Deposit(highRiskPortfolio, 0),
  new Deposit(retirementPortfolio, 100),
]);

var depositService = new DepositService(customer, depositPlan3);
depositService.depositFund();
console.log("depositPlan3", depositPlan3.toJSON());

console.log("customer", customer.toJSON());

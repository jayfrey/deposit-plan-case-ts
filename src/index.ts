import { Customer } from "./models/Customer";
import { Portfolio } from "./models/Portfolio";
import { Deposit } from "./models/Deposit";
import { DepositPlan } from "./models/DepositPlan";

import { DepositPlanTypes } from "./enums/DepositPlanTypes";
import { PortfolioService } from "./services/PortfolioService";
import { DepositService } from "./services/DepositService";
import { CustomerService } from "./services/CustomerService";
import { CustomerPorfolioService } from "./services/CustomerPortfolioService";
import { customerPortfolios } from "./data/CustomerPortfolios";
import { IPortfolio } from "./interfaces/models/IPortfolio";

var customerService = new CustomerService();
var customer1 = customerService.create({ name: "Jay" });
customerService.create({ name: "William" });

var portfolioService = new PortfolioService();
var portfolio1 = portfolioService.create({ name: "High Risk" });
var portfolio2 = portfolioService.create({ name: "Retirement" });

// console.log(customerService.findAll());
// console.log(portfolioService.findAll());
// console.log(portfolioService.findById(2));

var customerPortfolioService = new CustomerPorfolioService();

var customerHighRiskPortfolio = customerPortfolioService.create({
  customerId: customer1.getId(),
  portfolioId: portfolio1.getId(),
});

var customerRetirementPortfolio = customerPortfolioService.create({
  customerId: customer1.getId(),
  portfolioId: portfolio2.getId(),
});

// console.log("customerHighRiskPortfolio", customerHighRiskPortfolio);
// console.log("customerRetirementPortfolio", customerRetirementPortfolio);

var depositService = new DepositService();

var deposit1 = depositService.create({
  customerPortfolioId: customerHighRiskPortfolio.getId(),
  amount: 10000,
});

var deposit2 = depositService.create({
  customerPortfolioId: customerRetirementPortfolio.getId(),
  amount: 500,
});

// console.log(depositService.findAll());
// console.log(customerPortfolioService.findAll());
// console.log(customerService.findAll());
// console.log(customer1);
console.log(customerService.findById(1));

// var portfolios: IPortfolio[] = [];
// console.log(
//   customerPortfolios.map((customerPortfolio) => {
//     if (customerPortfolio.getCustomerId() == 1) {
//       var portfolio = customerPortfolio.getPorfolio();

//       if (portfolio != null) portfolios.push(portfolio);
//     }
//   })
// );

// console.log(portfolios);

// var customer = new Customer("Jay");

// var highRiskPortfolio = new Portfolio("High risk");
// var retirementPortfolio = new Portfolio("Retirement");

// console.log(customer);
// console.log(highRiskPortfolio);
// console.log(retirementPortfolio);

// var portfolioService1 = new PortfolioService(customer, highRiskPortfolio);
// portfolioService1.addPortfolio();

// var portfolioService2 = new PortfolioService(customer, retirementPortfolio);
// portfolioService2.addPortfolio();

// // Deposit service should complain error if portfolio not added yet
// var depositPlan1 = new DepositPlan(DepositPlanTypes.ONE_TIME, [
//   new Deposit(highRiskPortfolio, 10000),
//   new Deposit(retirementPortfolio, 500),
// ]);

// var depositService = new DepositService(customer, depositPlan1);
// depositService.depositFund();
// console.log("depositPlan1", depositPlan1.toJSON());

// var depositPlan2 = new DepositPlan(DepositPlanTypes.MONTHLY, [
//   new Deposit(highRiskPortfolio, 0),
//   new Deposit(retirementPortfolio, 100),
// ]);

// var depositService = new DepositService(customer, depositPlan2);
// depositService.depositFund();
// console.log("depositPlan2", depositPlan2.toJSON());

// var depositPlan3 = new DepositPlan(DepositPlanTypes.MONTHLY, [
//   new Deposit(highRiskPortfolio, 0),
//   new Deposit(retirementPortfolio, 100),
// ]);

// var depositService = new DepositService(customer, depositPlan3);
// depositService.depositFund();
// console.log("depositPlan3", depositPlan3.toJSON());

// console.log("customer", customer.toJSON());

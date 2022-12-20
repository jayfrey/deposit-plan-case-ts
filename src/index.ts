import { Customer } from "./models/Customer";
import { Portfolio } from "./models/Portfolio";
import { Deposit } from "./models/Deposit";
import { DepositPlan } from "./models/DepositPlan";

import { DepositPlanTypes } from "./enums/DepositPlanTypes";
import { PortfolioService } from "./services/PortfolioService";
import { DepositService } from "./services/DepositService";
import { CustomerService } from "./services/CustomerService";
import { CustomerPorfolioService } from "./services/CustomerPortfolioService";
import { customerPortfolioData } from "./data/CustomerPortfolioData";
import { IPortfolio } from "./interfaces/models/IPortfolio";
import { DepositPlanService } from "./services/DepositPlanService";

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

var depositPlanService = new DepositPlanService();

var depositPlan1 = depositPlanService.create({
  customerId: customer1.getId(),
  type: DepositPlanTypes.ONE_TIME,
});

var depositService = new DepositService();

var deposit1 = depositService.create({
  depositPlanId: depositPlan1!.getId(),
  customerPortfolioId: customerHighRiskPortfolio!.getId(),
  amount: 10000,
});

var deposit2 = depositService.create({
  depositPlanId: depositPlan1!.getId(),
  customerPortfolioId: customerRetirementPortfolio!.getId(),
  amount: 500,
});

var depositPlan2 = depositPlanService.create({
  customerId: customer1.getId(),
  type: DepositPlanTypes.MONTHLY,
});

var deposit21 = depositService.create({
  depositPlanId: depositPlan2!.getId(),
  customerPortfolioId: customerRetirementPortfolio!.getId(),
  amount: 100,
});

// console.log(depositPlan1);

// console.log(depositService.findAll());
// console.log(customerPortfolioService.findAll());
// customer1.getPortfolios();
// console.log(customerService.findAll());
// console.log(customer1);
console.log(customerService.findById(1));

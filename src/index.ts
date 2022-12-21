import { DepositPlanTypes } from "./enums/DepositPlanTypes";
import { PortfolioService } from "./services/PortfolioService";
import { DepositService } from "./services/DepositService";
import { CustomerService } from "./services/CustomerService";
import { CustomerPorfolioService } from "./services/CustomerPortfolioService";
import { DepositPlanService } from "./services/DepositPlanService";
import { IDepositPlan } from "./interfaces/models/IDepositPlan";

var customerService = new CustomerService();
var portfolioService = new PortfolioService();
var customerPortfolioService = new CustomerPorfolioService();
var depositPlanService = new DepositPlanService();
var depositService = new DepositService();

var customer1 = customerService.create({ name: "Jay" });
customerService.create({ name: "William" });

var portfolio1 = portfolioService.create({ name: "High Risk" });
var portfolio2 = portfolioService.create({ name: "Retirement" });

var customerHighRiskPortfolio = customerPortfolioService.create({
  customerId: customer1.getId(),
  portfolioId: portfolio1.getId(),
});

var customerRetirementPortfolio = customerPortfolioService.create({
  customerId: customer1.getId(),
  portfolioId: portfolio2.getId(),
});

var depositPlan1 = depositPlanService.create({
  customerId: customer1.getId(),
  type: DepositPlanTypes.ONE_TIME,
});

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

var deposit1 = depositService.create({
  depositPlanId: depositPlan2!.getId(),
  customerPortfolioId: customerHighRiskPortfolio!.getId(),
  amount: 0,
});

var deposit2 = depositService.create({
  depositPlanId: depositPlan2!.getId(),
  customerPortfolioId: customerRetirementPortfolio!.getId(),
  amount: 100,
});

var depositPlan3 = depositPlanService.create({
  customerId: customer1.getId(),
  type: DepositPlanTypes.MONTHLY,
});

// console.log(depositPlan1);

// console.log(depositService.findAll());
// console.log(customerPortfolioService.findAll());
// customer1.getPortfolios();
// console.log(customerService.findAll());
// console.log(customer1);
console.log(
  customerService
    .findById(1)
    ?.getDepositPlans()
    .map((depositPlan: IDepositPlan) => {
      return depositPlan.toJSON();
    })
);

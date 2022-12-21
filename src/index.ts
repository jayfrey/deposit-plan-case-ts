import { DepositPlanTypes } from "./enums/DepositPlanTypes";
import { BasePortfolioService } from "./modules/portfolio/services/BasePortfolioService";
import { DepositService } from "./modules/deposit/services/DepositService";
import { CustomerService } from "./modules/customer/services/CustomerService";
import { CustomerPorfolioService } from "./modules/portfolio/services/CustomerPortfolioService";
import { DepositPlanService } from "./modules/deposit/services/DepositPlanService";

var customerService = new CustomerService();
var basePortfolioService = new BasePortfolioService();
var customerPortfolioService = new CustomerPorfolioService();
var depositPlanService = new DepositPlanService();
var depositService = new DepositService();

function setupBasicData() {
  customerService.create({ name: "Jay" });
  customerService.create({ name: "William" });

  basePortfolioService.create({ name: "General Investing" });
  basePortfolioService.create({ name: "Responsible Investing" });
}

function createCustomerPortfolio() {
  var customer = customerService.findById(2)!; // Returns customer William
  var highRiskPortfolio = basePortfolioService.findById(1)!; // Returns base portfolio of General Investing
  var retirementPortfolio = basePortfolioService.findById(2)!; // Return base portoflio of Responsible Investing

  customerPortfolioService.create({
    customerId: customer.getId(),
    basePortfolioId: highRiskPortfolio.getId(),
    name: "High Risk", // Custom name for Portfolio
  });

  customerPortfolioService.create({
    customerId: customer.getId(),
    basePortfolioId: retirementPortfolio.getId(),
    name: "Retirement",
  });
}

function setupDepositPlans() {
  var customer = customerService.findById(2)!; // Returns customer William
  var customerHighRiskPortfolio = customerPortfolioService.findById(1); // Returns William's High Risk portfolio
  var customerRetirementPortfolio = customerPortfolioService.findById(2); // Returns William's Retirement portfolio

  // One time (High risk: $10,000, Retirement: $500)
  var depositPlan1 = depositPlanService.create({
    customerId: customer.getId(),
    type: DepositPlanTypes.ONE_TIME,
  });

  depositService.create({
    depositPlanId: depositPlan1!.getId(),
    customerPortfolioId: customerHighRiskPortfolio!.getId(),
    amount: 10000,
  });

  depositService.create({
    depositPlanId: depositPlan1!.getId(),
    customerPortfolioId: customerRetirementPortfolio!.getId(),
    amount: 500,
  });

  // Monthly (High risk: $0, Retirement: $100)
  var depositPlan2 = depositPlanService.create({
    customerId: customer.getId(),
    type: DepositPlanTypes.MONTHLY,
  });

  depositService.create({
    depositPlanId: depositPlan2!.getId(),
    customerPortfolioId: customerHighRiskPortfolio!.getId(),
    amount: 0,
  });

  depositService.create({
    depositPlanId: depositPlan2!.getId(),
    customerPortfolioId: customerRetirementPortfolio!.getId(),
    amount: 100,
  });
}

function demo() {
  setupBasicData(); // Create customer profile and base portfolio
  createCustomerPortfolio(); // Create customer portfolio
  setupDepositPlans(); // Create deposit plans
}

demo();
console.log(customerService.findById(2));

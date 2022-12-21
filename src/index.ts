import { DepositPlanTypes } from "./enums/DepositPlanTypes";
import { BasePortfolioService } from "./modules/portfolio/services/BasePortfolioService";
import { DepositPlanService } from "./modules/deposit/services/DepositPlanService";
import { CustomerService } from "./modules/customer/services/CustomerService";
import { CustomerPorfolioService } from "./modules/portfolio/services/CustomerPortfolioService";
import { FundDepositService } from "./modules/deposit/services/FundDepositService";

var customerService = new CustomerService();
var basePortfolioService = new BasePortfolioService();
var customerPortfolioService = new CustomerPorfolioService();
var fundDepositService = new FundDepositService();
var depositPlanService = new DepositPlanService();

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
  var fundDeposit1 = fundDepositService.create({
    customerId: customer.getId(),
    type: DepositPlanTypes.ONE_TIME,
  });

  depositPlanService.create({
    fundDepositId: fundDeposit1!.getId(),
    customerPortfolioId: customerHighRiskPortfolio!.getId(),
    amount: 10000,
  });

  depositPlanService.create({
    fundDepositId: fundDeposit1!.getId(),
    customerPortfolioId: customerRetirementPortfolio!.getId(),
    amount: 500,
  });

  // Monthly (High risk: $0, Retirement: $100)
  var fundDeposit2 = fundDepositService.create({
    customerId: customer.getId(),
    type: DepositPlanTypes.MONTHLY,
  });

  depositPlanService.create({
    fundDepositId: fundDeposit2!.getId(),
    customerPortfolioId: customerHighRiskPortfolio!.getId(),
    amount: 0,
  });

  depositPlanService.create({
    fundDepositId: fundDeposit2!.getId(),
    customerPortfolioId: customerRetirementPortfolio!.getId(),
    amount: 100,
  });

  // var fundDeposit3 = fundDepositService.create({
  //   customerId: customer.getId(),
  //   type: DepositPlanTypes.MONTHLY,
  // });

  // depositService.create({
  //   fundDepositId: fundDeposit3!.getId(),
  //   customerPortfolioId: customerHighRiskPortfolio!.getId(),
  //   amount: 0,
  // });

  // depositService.create({
  //   fundDepositId: fundDeposit3!.getId(),
  //   customerPortfolioId: customerRetirementPortfolio!.getId(),
  //   amount: 100,
  // });
}

function demo() {
  setupBasicData(); // Create customer profile and base portfolio
  createCustomerPortfolio(); // Create customer portfolio
  setupDepositPlans(); // Create deposit plans
}

demo();
console.log(customerService.findById(2));
// console.log(depositService.findAll());
// console.log(fundDepositService.findAll());

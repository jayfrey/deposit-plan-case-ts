import { IDepositPlanData } from "../interfaces/IDepositPlan";
import { IDepositPlanRepository } from "../interfaces/IDepositPlanRepository";
import { ICustomerPorfolioService } from "../../portfolio/interfaces/ICustomerPorfolioService";
import { IFundDepositService } from "../interfaces/IFundDepositService";
import { IDepositPlanService } from "../interfaces/IDepositPlanService";
import { DepositPlanRepository } from "../repositories/DepositPlanRepository";
import { CustomerPorfolioService } from "../../portfolio/services/CustomerPortfolioService";
import { FundDepositService } from "./FundDepositService";

export class DepositPlanService implements IDepositPlanService {
  depositPlanRepository: IDepositPlanRepository;
  fundDepositService: IFundDepositService;
  customerPortfolioService: ICustomerPorfolioService;

  constructor() {
    this.depositPlanRepository = new DepositPlanRepository();
    this.fundDepositService = new FundDepositService();
    this.customerPortfolioService = new CustomerPorfolioService();
  }

  findAll() {
    return this.depositPlanRepository.findAll();
  }

  findById(id: number) {
    return this.depositPlanRepository.findById(id);
  }

  create(data: IDepositPlanData) {
    var fundDeposit = this.fundDepositService.findById(data.fundDepositId);
    var customerPortfolio = this.customerPortfolioService.findById(
      data.customerPortfolioId
    );

    if (fundDeposit != null && customerPortfolio != null) {
      var depositPlan = this.depositPlanRepository.create(data);
      fundDeposit.refresh();
      customerPortfolio?.refresh();
      return depositPlan;
    }
    return null;
  }
}

import { IDepositData } from "../interfaces/models/IDeposit";
import { IDepositRepository } from "../interfaces/repositories/IDepositRespository";
import { ICustomerPorfolioService } from "../interfaces/services/ICustomerPorfolioService";
import { IDepositPlanService } from "../interfaces/services/IDepositPlanService";
import { IDepositService } from "../interfaces/services/IDepositService";
import { DepositRepository } from "../repositories/DepositRepository";
import { CustomerPorfolioService } from "./CustomerPortfolioService";
import { DepositPlanService } from "./DepositPlanService";

export class DepositService implements IDepositService {
  depositRepository: IDepositRepository;
  depositPlanService: IDepositPlanService;
  customerPortfolioService: ICustomerPorfolioService;

  constructor() {
    this.depositRepository = new DepositRepository();
    this.depositPlanService = new DepositPlanService();
    this.customerPortfolioService = new CustomerPorfolioService();
  }

  findAll() {
    return this.depositRepository.findAll();
  }

  findById(id: number) {
    return this.depositRepository.findById(id);
  }

  create(data: IDepositData) {
    var depositPlan = this.depositPlanService.findById(data.depositPlanId);
    var customerPortfolio = this.customerPortfolioService.findById(
      data.customerPortfolioId
    );

    if (depositPlan != null && customerPortfolio != null) {
      var deposit = this.depositRepository.create(data);
      depositPlan.refresh();
      customerPortfolio?.refresh();
      return deposit;
    }
    return null;
  }
}

import { IDepositData } from "../interfaces/IDeposit";
import { IDepositRepository } from "../interfaces/IDepositRespository";
import { ICustomerPorfolioService } from "../../portfolio/interfaces/ICustomerPorfolioService";
import { IDepositPlanService } from "../interfaces/IDepositPlanService";
import { IDepositService } from "../interfaces/IDepositService";
import { DepositRepository } from "../repositories/DepositRepository";
import { CustomerPorfolioService } from "../../portfolio/services/CustomerPortfolioService";
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

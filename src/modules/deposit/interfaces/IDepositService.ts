import { IDeposit, IDepositData } from "./IDeposit";
import { IDepositRepository } from "./IDepositRespository";
import { ICustomerPorfolioService } from "../../portfolio/interfaces/ICustomerPorfolioService";
import { IDepositPlanService } from "./IDepositPlanService";

export interface IDepositService {
  depositRepository: IDepositRepository;
  depositPlanService: IDepositPlanService;
  customerPortfolioService: ICustomerPorfolioService;

  findAll: () => IDeposit[];
  findById: (id: number) => IDeposit | null;
  create: (data: IDepositData) => IDeposit | null;
}

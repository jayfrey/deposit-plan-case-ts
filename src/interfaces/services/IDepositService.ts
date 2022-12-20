import { IDeposit, IDepositData } from "../models/IDeposit";
import { IDepositRepository } from "../repositories/IDepositRespository";
import { ICustomerPorfolioService } from "./ICustomerPorfolioService";
import { IDepositPlanService } from "./IDepositPlanService";

export interface IDepositService {
  depositRepository: IDepositRepository;
  depositPlanService: IDepositPlanService;
  customerPortfolioService: ICustomerPorfolioService;

  findAll: () => IDeposit[];
  findById: (id: number) => IDeposit | null;
  create: (data: IDepositData) => IDeposit | null;
}

import { IDepositPlan, IDepositPlanData } from "./IDepositPlan";
import { IDepositPlanRepository } from "./IDepositPlanRepository";
import { ICustomerPorfolioService } from "../../portfolio/interfaces/ICustomerPorfolioService";
import { IFundDepositService } from "./IFundDepositService";

export interface IDepositPlanService {
  depositPlanRepository: IDepositPlanRepository;
  fundDepositService: IFundDepositService;
  customerPortfolioService: ICustomerPorfolioService;

  findAll: () => IDepositPlan[];
  findById: (id: number) => IDepositPlan | null;
  create: (data: IDepositPlanData) => IDepositPlan | null;
}

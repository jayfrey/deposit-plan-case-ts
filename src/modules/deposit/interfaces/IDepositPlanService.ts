import { IDepositPlan, IDepositPlanData } from "./IDepositPlan";
import { IDepositPlanRepository } from "./IDepositPlanRespository";

export interface IDepositPlanService {
  depositPlanRepository: IDepositPlanRepository;

  findAll: () => IDepositPlan[];
  findById: (id: number) => IDepositPlan | null;
  create: (data: IDepositPlanData) => IDepositPlan | null;
}

import { IDepositPlan, IDepositPlanData } from "../models/IDepositPlan";
import { IDepositPlanRepository } from "../repositories/IDepositPlanRespository";

export interface IDepositPlanService {
  depositPlanRepository: IDepositPlanRepository;

  findAll: () => IDepositPlan[];
  findById: (id: number) => IDepositPlan | null;
  create: (data: IDepositPlanData) => IDepositPlan | null;
}

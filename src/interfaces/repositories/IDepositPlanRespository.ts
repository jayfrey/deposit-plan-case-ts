import { IDepositPlan, IDepositPlanData } from "../models/IDepositPlan";

export interface IDepositPlanRepository {
  findAll: () => IDepositPlan[];
  findById: (id: number) => IDepositPlan | null;
  create: ({ customerId, type }: IDepositPlanData) => IDepositPlan;
}

import { IDepositPlan, IDepositPlanData } from "./IDepositPlan";

export interface IDepositPlanRepository {
  findAll: () => IDepositPlan[];
  findById: (id: number) => IDepositPlan | null;
  create: ({ customerId, type }: IDepositPlanData) => IDepositPlan;
}

import { IDepositPlan, IDepositPlanData } from "./IDepositPlan";

export interface IDepositPlanRepository {
  findAll: () => IDepositPlan[];
  findById: (id: number) => IDepositPlan | null;
  create: ({
    fundDepositId,
    customerPortfolioId,
    amount,
  }: IDepositPlanData) => IDepositPlan;
}

import { IDeposit, IDepositData } from "./IDeposit";

export interface IDepositRepository {
  findAll: () => IDeposit[];
  findById: (id: number) => IDeposit | null;
  create: ({
    depositPlanId,
    customerPortfolioId,
    amount,
  }: IDepositData) => IDeposit;
}

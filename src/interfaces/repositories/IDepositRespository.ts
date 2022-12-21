import { IDeposit, IDepositData } from "../models/IDeposit";

export interface IDepositRepository {
  findAll: () => IDeposit[];
  findById: (id: number) => IDeposit | null;
  create: ({
    depositPlanId,
    customerPortfolioId,
    amount,
  }: IDepositData) => IDeposit;
}

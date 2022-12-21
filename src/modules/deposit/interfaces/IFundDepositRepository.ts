import { IFundDeposit, IFundDepositData } from "./IFundDeposit";

export interface IFundDepositRepository {
  findAll: () => IFundDeposit[];
  findById: (id: number) => IFundDeposit | null;
  create: ({ customerId, type }: IFundDepositData) => IFundDeposit;
}

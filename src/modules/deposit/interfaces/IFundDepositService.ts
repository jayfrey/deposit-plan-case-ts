import { IFundDeposit, IFundDepositData } from "./IFundDeposit";
import { IFundDepositRepository } from "./IFundDepositRepository";

export interface IFundDepositService {
  fundDepositRepository: IFundDepositRepository;

  findAll: () => IFundDeposit[];
  findById: (id: number) => IFundDeposit | null;
  create: (data: IFundDepositData) => IFundDeposit | null;
}

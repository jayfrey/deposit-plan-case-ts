import { fundDepositData } from "../../../data/FundDepositData";
import { IFundDeposit, IFundDepositData } from "../interfaces/IFundDeposit";
import { IFundDepositRepository } from "../interfaces/IFundDepositRepository";
import { FundDeposit } from "../models/FundDeposit";

export class FundDepositRepository implements IFundDepositRepository {
  findAll() {
    return fundDepositData;
  }

  findById(id: number) {
    return (
      fundDepositData.find((fundDeposit: IFundDeposit) => {
        if (fundDeposit.getId() === id) {
          return fundDeposit;
        }
      }) || null
    );
  }

  create({ customerId, type }: IFundDepositData) {
    var fundDeposit = new FundDeposit(customerId, type);
    fundDepositData.push(fundDeposit);
    return fundDeposit;
  }
}

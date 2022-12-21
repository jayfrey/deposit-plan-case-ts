import { depositData } from "../data/DepositData";
import { IDeposit, IDepositData } from "../interfaces/models/IDeposit";
import { IDepositRepository } from "../interfaces/repositories/IDepositRespository";
import { Deposit } from "../models/Deposit";

export class DepositRepository implements IDepositRepository {
  findAll() {
    return depositData;
  }

  findById(id: number) {
    return (
      depositData.find((deposit: IDeposit) => {
        if (deposit.getId() === id) {
          return deposit;
        }
      }) || null
    );
  }

  create({ depositPlanId, customerPortfolioId, amount }: IDepositData) {
    var deposit = new Deposit(depositPlanId, customerPortfolioId, amount);
    depositData.push(deposit);
    return deposit;
  }
}

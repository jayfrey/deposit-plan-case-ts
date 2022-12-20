import { deposits } from "../data/Deposits";
import { IDeposit, IDepositData } from "../interfaces/models/IDeposit";
import { IDepositRepository } from "../interfaces/repositories/IDepositRespository";
import { Deposit } from "../models/Deposit";

export class DepositRepository implements IDepositRepository {
  findAll() {
    return deposits;
  }

  findById(id: number) {
    return (
      deposits.find((deposit: IDeposit) => {
        if (deposit.getId() === id) {
          return deposit;
        }
      }) || null
    );
  }

  create({ customerPortfolioId, amount }: IDepositData) {
    var deposit = new Deposit(customerPortfolioId, amount);
    deposits.push(deposit);
    return deposit;
  }
}

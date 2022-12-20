import { IDeposit } from "../interfaces/models/IDeposit";
import { IPortfolio } from "../interfaces/models/IPortfolio";

export class Deposit implements IDeposit {
  static nextVal: number = 0;
  id: number;
  portfolio: IPortfolio;
  amount: number;

  constructor(portfolio: IPortfolio, amount: number) {
    this.id = ++Deposit.nextVal;
    this.portfolio = portfolio;
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }

  getPortfolio() {
    return this.portfolio;
  }
}

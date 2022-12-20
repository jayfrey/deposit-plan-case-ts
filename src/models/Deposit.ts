import { IDeposit } from "../interfaces/models/IDeposit";
import { IPortfolio } from "../interfaces/models/IPortfolio";

export class Deposit implements IDeposit {
  static nextVal: number = 0;
  id: number;
  customerPortfolioId: number;

  amount: number;

  constructor(customerPortfolioId: number, amount: number) {
    this.id = ++Deposit.nextVal;
    this.customerPortfolioId = customerPortfolioId;
    this.amount = amount;
  }

  getId() {
    return this.id;
  }

  getAmount() {
    return this.amount;
  }

  getCustomerPortfolioId() {
    return this.customerPortfolioId;
  }
}

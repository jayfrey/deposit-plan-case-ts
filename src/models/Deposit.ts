import { IDeposit } from "../interfaces/models/IDeposit";

export class Deposit implements IDeposit {
  static nextVal: number = 0;
  id: number;
  depositPlanId: number;
  customerPortfolioId: number;
  amount: number;

  constructor(
    depositPlanId: number,
    customerPortfolioId: number,
    amount: number
  ) {
    this.id = ++Deposit.nextVal;
    this.depositPlanId = depositPlanId;
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

  getDepositPlanId() {
    return this.depositPlanId;
  }
}

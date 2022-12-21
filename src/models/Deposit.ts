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

  getDepositPlanId() {
    return this.depositPlanId;
  }

  getCustomerPortfolioId() {
    return this.customerPortfolioId;
  }

  getAmount() {
    return this.amount;
  }

  toJSON() {
    return {
      id: this.id,
      deposit_plan_id: this.depositPlanId,
      customer_portfolio_id: this.customerPortfolioId,
      amount: this.amount,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

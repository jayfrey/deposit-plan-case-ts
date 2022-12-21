import { IDepositPlan } from "../interfaces/IDepositPlan";

export class DepositPlan implements IDepositPlan {
  static nextVal: number = 0;
  id: number;
  fundDepositId: number;
  customerPortfolioId: number;
  amount: number;

  constructor(
    fundDepositId: number,
    customerPortfolioId: number,
    amount: number
  ) {
    this.id = ++DepositPlan.nextVal;
    this.fundDepositId = fundDepositId;
    this.customerPortfolioId = customerPortfolioId;
    this.amount = amount;
  }

  getId() {
    return this.id;
  }

  getFundDepositId() {
    return this.fundDepositId;
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
      fund_deposit_id: this.fundDepositId,
      customer_portfolio_id: this.customerPortfolioId,
      amount: this.amount,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

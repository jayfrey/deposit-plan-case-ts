import { depositData } from "../data/Deposits";
import { IDeposit } from "../interfaces/models/IDeposit";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";

export class DepositPlan implements IDepositPlan {
  static nextVal: number = 0;
  id: number;
  customerId: number;
  type: number;
  deposits?: IDeposit[];
  totalFundDeposit: number;

  constructor(customerId: number, type: number) {
    this.id = ++DepositPlan.nextVal;
    this.type = type;
    this.customerId = customerId;
    this.totalFundDeposit = 0.0;
    this.refresh();
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }

  getCustomerId() {
    return this.customerId;
  }

  getDeposits() {
    return this.deposits || [];
  }

  getTotalFundDeposit() {
    return this.totalFundDeposit;
  }

  refreshTotalFundDeposit() {
    this.totalFundDeposit =
      this.deposits?.reduce((total: number, deposit: IDeposit) => {
        return total + deposit.getAmount();
      }, 0.0) || 0.0;
  }

  refreshDeposits() {
    this.deposits = depositData.filter((deposit: IDeposit) => {
      return deposit.getDepositPlanId() == this.id;
    });
  }

  refresh() {
    this.refreshDeposits();
    this.refreshTotalFundDeposit();
  }

  toJSON() {
    return {
      id: this.id,
      customer_id: this.customerId,
      type: this.type,
      deposits: this.deposits?.map((deposit: IDeposit) => {
        return deposit.toJSON();
      }),
      total_fund_deposit: this.totalFundDeposit,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

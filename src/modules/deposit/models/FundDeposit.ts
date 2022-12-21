import { depositPlanData } from "../../../data/DepositPlanData";
import { IDepositPlan } from "../interfaces/IDepositPlan";
import { IFundDeposit } from "../interfaces/IFundDeposit";

export class FundDeposit implements IFundDeposit {
  static nextVal: number = 0;
  id: number;
  customerId: number;
  type: number;
  depositPlans?: IDepositPlan[];
  totalFundDeposit: number;

  constructor(customerId: number, type: number) {
    this.id = ++FundDeposit.nextVal;
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

  getDepositPlans() {
    return this.depositPlans || [];
  }

  getTotalFundDeposit() {
    return this.totalFundDeposit;
  }

  refreshTotalFundDeposit() {
    this.totalFundDeposit =
      this.depositPlans?.reduce((total: number, depositPlans: IDepositPlan) => {
        return total + depositPlans.getAmount();
      }, 0.0) || 0.0;
  }

  refreshDepositPlans() {
    this.depositPlans = depositPlanData.filter((depositPlan: IDepositPlan) => {
      return depositPlan.getFundDepositId() == this.id;
    });
  }

  refresh() {
    this.refreshDepositPlans();
    this.refreshTotalFundDeposit();
  }

  toJSON() {
    return {
      id: this.id,
      customer_id: this.customerId,
      type: this.type,
      deposit_plans: this.depositPlans?.map((depositPlan: IDepositPlan) => {
        return depositPlan.toJSON();
      }),
      total_fund_deposit: this.totalFundDeposit,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

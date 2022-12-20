import { depositData } from "../data/Deposits";
import { IDeposit, IDepositData } from "../interfaces/models/IDeposit";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";
import { Deposit } from "./Deposit";

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
      type: this.type,
      deposit: this.deposits,
      // total: this.total,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

// export class DepositPlan extends Deposit implements IDepositPlan {
//   static nextVal: number = 0;
//   id: number;
//   type: number;
//   deposits: IDeposit[];
//   total: number;

//   constructor(type: number, deposits: IDeposit[]) {
//     super();
//     this.id = ++DepositPlan.nextVal;
//     this.type = type;
//     this.deposits = deposits;
//     this.total = this.getTotalDeposit();
//   }

//   getType() {
//     return this.type;
//   }

//   getDeposits() {
//     return this.deposits;
//   }

//   getTotalDeposit() {
//     return this.getDeposits().reduce((total: number, deposit: Deposit) => {
//       return total + deposit.getAmount();
//     }, 0.0);
//   }

//   toJSON() {
//     return {
//       id: this.id,
//       type: this.type,
//       deposit: this.deposits,
//       total: this.total,
//     };
//   }

//   toString() {
//     return JSON.stringify(this.toJSON());
//   }
// }

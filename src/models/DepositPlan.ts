import { IDeposit } from "../interfaces/models/IDeposit";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";
import { Deposit } from "./Deposit";

export class DepositPlan implements IDepositPlan {
  static nextVal: number = 0;
  id: number;
  type: number;
  deposits: IDeposit[];
  total: number;

  constructor(type: number, deposits: IDeposit[]) {
    this.id = ++DepositPlan.nextVal;
    this.type = type;
    this.deposits = deposits;
    this.total = this.getTotalDeposit();
  }

  getType() {
    return this.type;
  }

  getDeposits() {
    return this.deposits;
  }

  getTotalDeposit() {
    return this.getDeposits().reduce((total: number, deposit: Deposit) => {
      return total + deposit.getAmount();
    }, 0.0);
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      deposit: this.deposits,
      total: this.total,
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

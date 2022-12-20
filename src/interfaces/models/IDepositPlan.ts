import { IDeposit } from "./IDeposit";

export interface IDepositPlan {
  type: number;
  deposits: IDeposit[];
  total: number;

  getType: () => number;
  getDeposits: () => IDeposit[];
  getTotalDeposit: () => number;
}

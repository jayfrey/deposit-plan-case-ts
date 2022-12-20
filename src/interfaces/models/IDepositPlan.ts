import { IDeposit } from "./IDeposit";

interface IDepositPlanData {
  customerId: number;
  type: number;
}

interface IDepositPlan extends IDepositPlanData {
  id: number;
  deposits?: IDeposit[];
  totalFundDeposit: number;

  getId: () => number;
  getCustomerId: () => number;
  getType: () => number;
  getDeposits: () => IDeposit[];

  refreshDeposits: () => void;
  refresh: () => void;
}

export { IDepositPlanData, IDepositPlan };

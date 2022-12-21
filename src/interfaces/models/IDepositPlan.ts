import { IDeposit } from "./IDeposit";
import { IOutputter } from "./IOutputter";

interface IDepositPlanData {
  customerId: number;
  type: number;
}

interface IDepositPlan extends IDepositPlanData, IOutputter {
  id: number;
  deposits?: IDeposit[];
  totalFundDeposit: number;

  getId: () => number;
  getType: () => number;
  getCustomerId: () => number;
  getDeposits: () => IDeposit[];
  getTotalFundDeposit: () => number;

  refreshDeposits: () => void;
  refresh: () => void;
}

export { IDepositPlanData, IDepositPlan };

import { IDeposit } from "./IDeposit";
import { IOutputter } from "../utils/IOutputter";
import { IModelHelper } from "../utils/IModelHelper";

interface IDepositPlanData {
  customerId: number;
  type: number;
}

interface IDepositPlan extends IDepositPlanData, IOutputter, IModelHelper {
  id: number;
  deposits?: IDeposit[];
  totalFundDeposit: number;

  getId: () => number;
  getType: () => number;
  getCustomerId: () => number;
  getDeposits: () => IDeposit[];
  getTotalFundDeposit: () => number;

  refreshDeposits: () => void;
}

export { IDepositPlanData, IDepositPlan };

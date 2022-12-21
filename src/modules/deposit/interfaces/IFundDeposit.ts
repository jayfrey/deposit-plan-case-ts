import { IDepositPlan } from "./IDepositPlan";
import { IOutputter } from "../../shared/interfaces/IOutputter";
import { IModelHelper } from "../../shared/interfaces/IModelHelper";

interface IFundDepositData {
  customerId: number;
  type: number;
}

interface IFundDeposit extends IFundDepositData, IOutputter, IModelHelper {
  id: number;
  depositPlans?: IDepositPlan[];
  totalFundDeposit: number;

  getId: () => number;
  getType: () => number;
  getCustomerId: () => number;
  getDepositPlans: () => IDepositPlan[];
  getTotalFundDeposit: () => number;

  refreshDepositPlans: () => void;
}

export { IFundDepositData, IFundDeposit };

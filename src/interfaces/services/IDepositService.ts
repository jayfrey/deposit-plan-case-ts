import { ICustomer } from "../models/ICustomer";
import { IDepositPlan } from "../models/IDepositPlan";

export interface IDepositService {
  customer: ICustomer;
  depositPlan: IDepositPlan;

  depositFund: () => void;
}

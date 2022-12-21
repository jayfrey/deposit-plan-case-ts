import { IOutputter } from "../utils/IOutputter";
import { IDepositPlan } from "./IDepositPlan";
import { ICustomerPortfolio } from "./ICustomerPortfolio";
import { IModelHelper } from "../utils/IModelHelper";

interface ICustomerData {
  name: string;
}

interface ICustomer extends ICustomerData, IOutputter, IModelHelper {
  id: number;
  customerPortfolios?: ICustomerPortfolio[];
  depositPlans?: IDepositPlan[];

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;
  getCustomerPortfolio: () => ICustomerPortfolio[];
  getDepositPlans: () => IDepositPlan[];

  refreshCustomerPortfolios: (customerPortfolios: ICustomerPortfolio[]) => void;
  refreshDepositPlans: (depositPlans: IDepositPlan[]) => void;
}

export { ICustomerData, ICustomer };

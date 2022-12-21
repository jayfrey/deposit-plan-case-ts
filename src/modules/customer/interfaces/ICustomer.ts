import { IOutputter } from "../../shared/interfaces/IOutputter";
import { IDepositPlan } from "../../deposit/interfaces/IDepositPlan";
import { ICustomerPortfolio } from "../../portfolio/interfaces/ICustomerPortfolio";
import { IModelHelper } from "../../shared/interfaces/IModelHelper";

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

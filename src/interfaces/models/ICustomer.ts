import { IOutputter } from "./IOutputter";
import { IDepositPlan } from "./IDepositPlan";
import { ICustomerPortfolio } from "./ICustomerPortfolio";

interface ICustomerData {
  name: string;
}

interface ICustomer extends ICustomerData, IOutputter {
  id: number;
  customerPortfolios?: ICustomerPortfolio[];
  depositPlans?: IDepositPlan[];

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;

  refreshCustomerPortfolios: (customerPortfolios: ICustomerPortfolio[]) => void;
  refreshDepositPlans: (depositPlans: IDepositPlan[]) => void;
  refresh: () => void;
}

export { ICustomerData, ICustomer };

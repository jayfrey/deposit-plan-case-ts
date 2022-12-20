import { IPortfolio } from "./IPortfolio";
import { IOutputter } from "./IOutputter";
import { IDepositPlan } from "./IDepositPlan";

interface ICustomerData {
  name: string;
}

interface ICustomer extends ICustomerData, IOutputter {
  id: number;
  portfolios: IPortfolio[];
  // depositPlans: IDepositPlan[];

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;

  getPortfolios: () => IPortfolio[];

  // setPortfolios: (portfolios: IPortfolio[]) => void;
  // getPortfolios: () => IPortfolio[];
  // setDepositPlans: (depositPlans: IDepositPlan[]) => void;
  // getDepositPlans: () => IDepositPlan[];
}

export { ICustomerData, ICustomer };

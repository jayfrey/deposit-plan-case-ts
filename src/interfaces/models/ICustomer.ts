import { IPortfolio } from "./IPortfolio";
import { IOutputter } from "./IOutputter";
import { IDepositPlan } from "./IDepositPlan";

export interface ICustomer extends IOutputter {
  id: number;
  name: string;

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;

  setPortfolios: (portfolios: IPortfolio[]) => void;
  getPortfolios: () => IPortfolio[];
  setDepositPlans: (depositPlans: IDepositPlan[]) => void;
  getDepositPlans: () => IDepositPlan[];
}

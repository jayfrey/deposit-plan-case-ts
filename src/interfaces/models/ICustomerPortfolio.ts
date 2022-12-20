import { IPortfolio } from "./IPortfolio";
import { IOutputter } from "./IOutputter";
import { IDepositPlan } from "./IDepositPlan";
import { ICustomer } from "./ICustomer";

interface ICustomerPortfolioData {
  //   name: string;
  //   portfolios?: IPortfolio[];
  //   depositPlans?: IDepositPlan[];
  customerId: number;
  portfolioId: number;
}

interface ICustomerPortfolio extends ICustomerPortfolioData, IOutputter {
  id: number;
  customer: ICustomer | null;
  portfolio: IPortfolio | null;

  getId: () => number;
  getCustomerId: () => number;
  getPortfolioId: () => number;
  getCustomer: () => ICustomer | null;
  getPorfolio: () => IPortfolio | null;
  // getIdByCustomerId: (customerId: number) => number;
  // getIdByCustomerIdAndPortfolioId: (
  //   customerId: number,
  //   portfolioId: number
  // ) => number;
  //   setName: (name: string) => void;
  //   getName: () => string;

  //   setPortfolios: (portfolios: IPortfolio[]) => void;
  //   getPortfolios: () => IPortfolio[];
  //   setDepositPlans: (depositPlans: IDepositPlan[]) => void;
  //   getDepositPlans: () => IDepositPlan[];
}

export { ICustomerPortfolioData, ICustomerPortfolio };

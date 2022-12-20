import { IPortfolio } from "./IPortfolio";
import { IOutputter } from "./IOutputter";
import { IDepositPlan } from "./IDepositPlan";
import { ICustomer } from "./ICustomer";

interface ICustomerPortfolioData {
  customerId: number;
  portfolioId: number;
  balance?: number;
}

interface ICustomerPortfolio extends ICustomerPortfolioData, IOutputter {
  id: number;
  customer?: ICustomer | null;
  portfolio?: IPortfolio | null;

  getId: () => number;
  getCustomerId: () => number;
  getPortfolioId: () => number;

  setBalance: (balance: number) => void;
  getBalance: () => number;

  getPortfolio: () => IPortfolio | null;
  refreshCustomer: () => void;
  refreshPorfolio: () => void;
}

export { ICustomerPortfolioData, ICustomerPortfolio };

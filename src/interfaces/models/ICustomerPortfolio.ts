import { IPortfolio } from "./IPortfolio";
import { IOutputter } from "../utils/IOutputter";
import { ICustomer } from "./ICustomer";
import { IModelHelper } from "../utils/IModelHelper";

interface ICustomerPortfolioData {
  customerId: number;
  portfolioId: number;
}

interface ICustomerPortfolio
  extends ICustomerPortfolioData,
    IOutputter,
    IModelHelper {
  id: number;
  customer?: ICustomer | null;
  portfolio?: IPortfolio | null;
  balance: number;

  getId: () => number;
  getCustomerId: () => number;
  getPortfolioId: () => number;

  setBalance: (balance: number) => void;
  getBalance: () => number;
  getPortfolio: () => IPortfolio | null;

  refreshBalance: () => void;
  refreshCustomer: () => void;
  refreshPorfolio: () => void;
}

export { ICustomerPortfolioData, ICustomerPortfolio };

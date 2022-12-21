import { IBasePortfolio } from "./IBasePortfolio";
import { IOutputter } from "../utils/IOutputter";
import { ICustomer } from "./ICustomer";
import { IModelHelper } from "../utils/IModelHelper";

interface ICustomerPortfolioData {
  customerId: number;
  basePortfolioId: number;
}

interface ICustomerPortfolio
  extends ICustomerPortfolioData,
    IOutputter,
    IModelHelper {
  id: number;
  customer?: ICustomer | null;
  basePortfolio?: IBasePortfolio | null;
  balance: number;

  getId: () => number;
  getCustomerId: () => number;
  getBasePortfolioId: () => number;

  setBalance: (balance: number) => void;
  getBalance: () => number;
  getBasePortfolio: () => IBasePortfolio | null;

  refreshBalance: () => void;
  refreshCustomer: () => void;
  refreshBasePorfolio: () => void;
}

export { ICustomerPortfolioData, ICustomerPortfolio };

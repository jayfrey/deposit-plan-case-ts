import { IOutputter } from "../../shared/interfaces/IOutputter";
import { IFundDeposit } from "../../deposit/interfaces/IFundDeposit";
import { ICustomerPortfolio } from "../../portfolio/interfaces/ICustomerPortfolio";
import { IModelHelper } from "../../shared/interfaces/IModelHelper";

interface ICustomerData {
  name: string;
}

interface ICustomer extends ICustomerData, IOutputter, IModelHelper {
  id: number;
  customerPortfolios?: ICustomerPortfolio[];
  fundDeposits?: IFundDeposit[];

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;
  getCustomerPortfolio: () => ICustomerPortfolio[];
  getFundDeposits: () => IFundDeposit[];

  refreshCustomerPortfolios: (customerPortfolios: ICustomerPortfolio[]) => void;
  refreshFundDeposits: (fundDeposits: IFundDeposit[]) => void;
}

export { ICustomerData, ICustomer };

import { Portfolio } from "../../models/Portfolio";
import { ICustomer } from "../models/ICustomer";
import { IPortfolio } from "../models/IPortfolio";

export interface IPortfolioService {
  customer: ICustomer;
  portfolio: IPortfolio;
  //   portfolios: IPortfolio[];

  addPortfolio: () => void;
  //   addPortfolios: () => void;
}

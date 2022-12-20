import { IPortfolio } from "./IPortfolio";

export interface IDeposit {
  id: number;
  portfolio: IPortfolio;
  amount: number;

  getAmount: () => number;
  getPortfolio: () => IPortfolio;
}

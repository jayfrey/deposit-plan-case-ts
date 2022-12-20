import { IOutputter } from "./IOutputter";

interface IPortfolioData {
  name: string;
  balance?: number;
}

interface IPortfolio extends IPortfolioData, IOutputter {
  id: number;

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;
  setBalance: (balance: number) => void;
  getBalance: () => number;
}

export { IPortfolioData, IPortfolio };

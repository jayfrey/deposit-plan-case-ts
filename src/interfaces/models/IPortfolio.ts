import { IOutputter } from "./IOutputter";

interface IPortfolioData {
  name: string;
}

interface IPortfolio extends IPortfolioData, IOutputter {
  id: number;

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;
}

export { IPortfolioData, IPortfolio };

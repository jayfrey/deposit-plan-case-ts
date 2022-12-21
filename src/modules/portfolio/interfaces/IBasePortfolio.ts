import { IOutputter } from "../../shared/interfaces/IOutputter";

interface IBasePortfolioData {
  name: string;
}

interface IBasePortfolio extends IBasePortfolioData, IOutputter {
  id: number;

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;
}

export { IBasePortfolioData, IBasePortfolio };

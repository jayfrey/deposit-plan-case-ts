import { IPortfolio, IPortfolioData } from "../models/IPortfolio";

export interface IPortfolioRepository {
  findAll: () => IPortfolio[];
  findById: (id: number) => IPortfolio | null;
  create: ({ name }: IPortfolioData) => IPortfolio;
}

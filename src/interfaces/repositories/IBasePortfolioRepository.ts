import { IBasePortfolio, IBasePortfolioData } from "../models/IBasePortfolio";

export interface IBasePortfolioRepository {
  findAll: () => IBasePortfolio[];
  findById: (id: number) => IBasePortfolio | null;
  create: ({ name }: IBasePortfolioData) => IBasePortfolio;
}

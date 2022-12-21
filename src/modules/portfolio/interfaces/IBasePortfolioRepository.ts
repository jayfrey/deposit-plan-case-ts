import { IBasePortfolio, IBasePortfolioData } from "./IBasePortfolio";

export interface IBasePortfolioRepository {
  findAll: () => IBasePortfolio[];
  findById: (id: number) => IBasePortfolio | null;
  create: ({ name }: IBasePortfolioData) => IBasePortfolio;
}

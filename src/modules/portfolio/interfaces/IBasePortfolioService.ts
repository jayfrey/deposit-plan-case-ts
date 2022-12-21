import { IBasePortfolio, IBasePortfolioData } from "./IBasePortfolio";
import { IBasePortfolioRepository } from "./IBasePortfolioRepository";

export interface IBasePortfolioService {
  basePortfolioRepository: IBasePortfolioRepository;

  findAll: () => IBasePortfolio[];
  findById: (id: number) => IBasePortfolio | null;
  create: (data: IBasePortfolioData) => IBasePortfolio;
}

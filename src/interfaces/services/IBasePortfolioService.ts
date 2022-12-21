import { IBasePortfolio, IBasePortfolioData } from "../models/IBasePortfolio";
import { IBasePortfolioRepository } from "../repositories/IBasePortfolioRepository";

export interface IBasePortfolioService {
  basePortfolioRepository: IBasePortfolioRepository;

  findAll: () => IBasePortfolio[];
  findById: (id: number) => IBasePortfolio | null;
  create: (data: IBasePortfolioData) => IBasePortfolio;
}

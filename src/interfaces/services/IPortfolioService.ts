import { IPortfolio, IPortfolioData } from "../models/IPortfolio";
import { IPortfolioRepository } from "../repositories/IPortfolioRepository";

export interface IPortfolioService {
  portfolioRepository: IPortfolioRepository;
  findAll: () => IPortfolio[];
  findById: (id: number) => IPortfolio | null;
  create: (data: IPortfolioData) => IPortfolio;
}

import { IPortfolioData } from "../interfaces/models/IPortfolio";
import { IPortfolioRepository } from "../interfaces/repositories/IPortfolioRepository";
import { IPortfolioService } from "../interfaces/services/IPortfolioService";
import { PortfolioRepository } from "../repositories/PortfolioRepository";

export class PortfolioService implements IPortfolioService {
  portfolioRepository: IPortfolioRepository;

  constructor() {
    this.portfolioRepository = new PortfolioRepository();
  }

  findAll() {
    return this.portfolioRepository.findAll();
  }

  findById(id: number) {
    return this.portfolioRepository.findById(id);
  }

  create(data: IPortfolioData) {
    return this.portfolioRepository.create(data);
  }
}

import { IBasePortfolioData } from "../interfaces/IBasePortfolio";
import { IBasePortfolioRepository } from "../interfaces/IBasePortfolioRepository";
import { IBasePortfolioService } from "../interfaces/IBasePortfolioService";
import { BasePortfolioRepository } from "../repositories/BasePortfolioRepository";

export class BasePortfolioService implements IBasePortfolioService {
  basePortfolioRepository: IBasePortfolioRepository;

  constructor() {
    this.basePortfolioRepository = new BasePortfolioRepository();
  }

  findAll() {
    return this.basePortfolioRepository.findAll();
  }

  findById(id: number) {
    return this.basePortfolioRepository.findById(id);
  }

  create(data: IBasePortfolioData) {
    return this.basePortfolioRepository.create(data);
  }
}

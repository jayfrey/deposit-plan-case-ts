import {
  ICustomerPortfolio,
  ICustomerPortfolioData,
} from "../models/ICustomerPortfolio";
import { ICustomerPortfolioRepository } from "../repositories/ICustomerPortfolioRepository";
import { ICustomerService } from "./ICustomerService";
import { IPortfolioService } from "./IPortfolioService";

export interface ICustomerPorfolioService {
  customerService: ICustomerService;
  portfolioService: IPortfolioService;
  customerPortfolioRepository: ICustomerPortfolioRepository;

  findAll: () => ICustomerPortfolio[];
  findById: (id: number) => ICustomerPortfolio | null;
  create: (data: ICustomerPortfolioData) => ICustomerPortfolio | null;
}

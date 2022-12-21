import {
  ICustomerPortfolio,
  ICustomerPortfolioData,
} from "../models/ICustomerPortfolio";
import { ICustomerPortfolioRepository } from "../repositories/ICustomerPortfolioRepository";
import { ICustomerService } from "./ICustomerService";
import { IBasePortfolioService } from "./IBasePortfolioService";

export interface ICustomerPorfolioService {
  customerService: ICustomerService;
  basePortfolioService: IBasePortfolioService;
  customerPortfolioRepository: ICustomerPortfolioRepository;

  findAll: () => ICustomerPortfolio[];
  findById: (id: number) => ICustomerPortfolio | null;
  create: (data: ICustomerPortfolioData) => ICustomerPortfolio | null;
}

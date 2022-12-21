import {
  ICustomerPortfolio,
  ICustomerPortfolioData,
} from "./ICustomerPortfolio";
import { ICustomerPortfolioRepository } from "./ICustomerPortfolioRepository";
import { ICustomerService } from "../../customer/interfaces/ICustomerService";
import { IBasePortfolioService } from "./IBasePortfolioService";

export interface ICustomerPorfolioService {
  customerService: ICustomerService;
  basePortfolioService: IBasePortfolioService;
  customerPortfolioRepository: ICustomerPortfolioRepository;

  findAll: () => ICustomerPortfolio[];
  findById: (id: number) => ICustomerPortfolio | null;
  create: (data: ICustomerPortfolioData) => ICustomerPortfolio | null;
}

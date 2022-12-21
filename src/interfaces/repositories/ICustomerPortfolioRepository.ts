import {
  ICustomerPortfolio,
  ICustomerPortfolioData,
} from "../models/ICustomerPortfolio";

export interface ICustomerPortfolioRepository {
  findAll: () => ICustomerPortfolio[];
  findById: (id: number) => ICustomerPortfolio | null;
  create: ({
    customerId,
    basePortfolioId,
  }: ICustomerPortfolioData) => ICustomerPortfolio;
}

import {
  ICustomerPortfolio,
  ICustomerPortfolioData,
} from "./ICustomerPortfolio";

export interface ICustomerPortfolioRepository {
  findAll: () => ICustomerPortfolio[];
  findById: (id: number) => ICustomerPortfolio | null;
  create: ({
    customerId,
    basePortfolioId,
    name,
  }: ICustomerPortfolioData) => ICustomerPortfolio;
}

import { customerPortfolios } from "../data/CustomerPortfolios";
import {
  ICustomerPortfolio,
  ICustomerPortfolioData,
} from "../interfaces/models/ICustomerPortfolio";
import { ICustomerPortfolioRepository } from "../interfaces/repositories/ICustomerPortfolioRepository";
import { CustomerPortfolio } from "../models/CustomerPortfolio";

export class CustomerPortfolioRepository
  implements ICustomerPortfolioRepository
{
  findAll() {
    return customerPortfolios;
  }
  findById(id: number) {
    return (
      customerPortfolios.find((customerPortfolio: ICustomerPortfolio) => {
        if (customerPortfolio.getId() === id) {
          return customerPortfolio;
        }
      }) || null
    );
  }
  create({ customerId, portfolioId }: ICustomerPortfolioData) {
    var customerPortfolio = new CustomerPortfolio(customerId, portfolioId);
    customerPortfolios.push(customerPortfolio);
    return customerPortfolio;
  }
}

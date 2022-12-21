import { customerPortfolioData } from "../data/CustomerPortfolioData";
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
    return customerPortfolioData;
  }

  findById(id: number) {
    return (
      customerPortfolioData.find((customerPortfolio: ICustomerPortfolio) => {
        if (customerPortfolio.getId() === id) {
          return customerPortfolio;
        }
      }) || null
    );
  }

  create({ customerId, basePortfolioId, name }: ICustomerPortfolioData) {
    var customerPortfolio = new CustomerPortfolio(
      customerId,
      basePortfolioId,
      name
    );
    customerPortfolioData.push(customerPortfolio);
    return customerPortfolio;
  }
}

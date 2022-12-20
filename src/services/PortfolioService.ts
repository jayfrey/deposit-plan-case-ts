import { ICustomer } from "../interfaces/models/ICustomer";
import { IPortfolio } from "../interfaces/models/IPortfolio";
import { IPortfolioService } from "../interfaces/services/IPortfolioService";

export class PortfolioService implements IPortfolioService {
  customer: ICustomer;
  portfolio: IPortfolio;

  constructor(customer: ICustomer, portfolio: IPortfolio) {
    this.customer = customer;
    this.portfolio = portfolio;
  }

  addPortfolio() {
    var customer_portfolios = this.customer.getPortfolios();
    customer_portfolios.push(this.portfolio);
    this.customer.setPortfolios(customer_portfolios);
  }
}

import { customers } from "../data/Customers";
import { portfolios } from "../data/Portfolios";
import { ICustomer } from "../interfaces/models/ICustomer";
import { ICustomerPortfolio } from "../interfaces/models/ICustomerPortfolio";
import { IPortfolio } from "../interfaces/models/IPortfolio";

export class CustomerPortfolio implements ICustomerPortfolio {
  static nextVal: number = 0;
  id: number;
  customerId: number;
  portfolioId: number;
  customer: ICustomer | null;
  portfolio: IPortfolio | null;

  constructor(customerId: number, portfolioId: number) {
    this.id = ++CustomerPortfolio.nextVal;
    this.customerId = customerId;
    this.portfolioId = portfolioId;
    this.customer = this.getCustomer();
    this.portfolio = this.getPorfolio();
  }

  getId() {
    return this.id;
  }

  getCustomerId() {
    return this.customerId;
  }

  getPortfolioId() {
    return this.portfolioId;
  }

  getCustomer() {
    return (
      customers.find((customer: ICustomer) => {
        if (customer.getId() === this.customerId) {
          return customer;
        }
      }) || null
    );
  }

  getPorfolio() {
    return (
      portfolios.find((portfolio: IPortfolio) => {
        if (portfolio.getId() === this.portfolioId) {
          return portfolio;
        }
      }) || null
    );
  }

  //   setName(name: string) {
  //     this.name = name;
  //   }

  //   getName() {
  //     return this.name;
  //   }

  //   setPortfolios(portfolios: IPortfolio[]) {
  //     this.portfolios = portfolios;
  //   }

  //   getPortfolios() {
  //     return this.portfolios;
  //   }

  //   setDepositPlans(depositPlans: IDepositPlan[]) {
  //     this.depositPlans = depositPlans;
  //   }

  //   getDepositPlans() {
  //     return this.depositPlans;
  //   }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      portfolioId: this.portfolioId,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

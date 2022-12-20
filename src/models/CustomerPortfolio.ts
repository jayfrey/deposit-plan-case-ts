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
  balance: number;
  customer?: ICustomer | null;
  portfolio?: IPortfolio | null;

  constructor(customerId: number, portfolioId: number) {
    this.id = ++CustomerPortfolio.nextVal;
    this.customerId = customerId;
    this.portfolioId = portfolioId;
    this.balance = 0.0;
    this.refresh();
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

  setBalance(balance: number) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  getPortfolio() {
    return this.portfolio || null;
  }

  refreshCustomer() {
    this.customer =
      customers.find((customer: ICustomer) => {
        if (customer.getId() === this.customerId) {
          return customer;
        }
      }) || null;
  }

  refreshPorfolio() {
    this.portfolio =
      portfolios.find((portfolio: IPortfolio) => {
        if (portfolio.getId() === this.portfolioId) {
          return portfolio;
        }
      }) || null;
  }

  refresh() {
    this.refreshCustomer();
    this.refreshPorfolio();
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
      balance: this.balance,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}
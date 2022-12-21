import { customers } from "../data/Customers";
import { depositPlanData } from "../data/DepositPlanData";
import { portfolios } from "../data/Portfolios";
import { ICustomer } from "../interfaces/models/ICustomer";
import { ICustomerPortfolio } from "../interfaces/models/ICustomerPortfolio";
import { IDeposit } from "../interfaces/models/IDeposit";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";
import { IPortfolio } from "../interfaces/models/IPortfolio";

export class CustomerPortfolio implements ICustomerPortfolio {
  static nextVal: number = 0;
  id: number;
  customerId: number;
  portfolioId: number;
  balance: number = 0.0;
  customer?: ICustomer | null;
  portfolio?: IPortfolio | null;

  constructor(customerId: number, portfolioId: number) {
    this.id = ++CustomerPortfolio.nextVal;
    this.customerId = customerId;
    this.portfolioId = portfolioId;
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

  refreshBalance() {
    var balance = 0;
    depositPlanData.map((depositPlan: IDepositPlan) => {
      if (depositPlan.getCustomerId() == this.customerId) {
        depositPlan.getDeposits().map((deposit: IDeposit) => {
          if (deposit.getCustomerPortfolioId() == this.id) {
            balance = balance + deposit.amount;
          }
        });
      }
    });
    this.balance = balance;
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
    this.refreshBalance();
  }

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

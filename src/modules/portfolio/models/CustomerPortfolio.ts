import { customerData } from "../../../data/CustomerData";
import { depositPlanData } from "../../../data/DepositPlanData";
import { basePortfolioData } from "../../../data/BasePortfolioData";
import { ICustomer } from "../../customer/interfaces/ICustomer";
import { ICustomerPortfolio } from "../interfaces/ICustomerPortfolio";
import { IDeposit } from "../../deposit/interfaces/IDeposit";
import { IDepositPlan } from "../../deposit/interfaces/IDepositPlan";
import { IBasePortfolio } from "../interfaces/IBasePortfolio";

export class CustomerPortfolio implements ICustomerPortfolio {
  static nextVal: number = 0;
  id: number;
  customerId: number;
  basePortfolioId: number;
  name?: string;
  balance: number = 0.0;
  customer?: ICustomer | null;
  basePortfolio?: IBasePortfolio | null;

  constructor(customerId: number, basePortfolioId: number, name?: string) {
    this.id = ++CustomerPortfolio.nextVal;
    this.customerId = customerId;
    this.basePortfolioId = basePortfolioId;
    this.name = name || this.getBasePortfolioName();
    this.refresh();
  }

  getId() {
    return this.id;
  }

  getCustomerId() {
    return this.customerId;
  }

  getBasePortfolioId() {
    return this.basePortfolioId;
  }

  getBasePortfolioName() {
    return basePortfolioData
      .find((basePortfolio: IBasePortfolio) => {
        if (basePortfolio.getId() === this.basePortfolioId) {
          return basePortfolio;
        }
      })
      ?.getName()!;
  }

  setBalance(balance: number) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  getBasePortfolio() {
    return this.basePortfolio || null;
  }

  refreshBalance() {
    var balance = 0.0;
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
      customerData.find((customer: ICustomer) => {
        if (customer.getId() === this.customerId) {
          return customer;
        }
      }) || null;
  }

  refreshBasePorfolio() {
    this.basePortfolio =
      basePortfolioData.find((basePortfolio: IBasePortfolio) => {
        if (basePortfolio.getId() === this.basePortfolioId) {
          return basePortfolio;
        }
      }) || null;
  }

  refresh() {
    this.refreshCustomer();
    this.refreshBasePorfolio();
    this.refreshBalance();
  }

  toJSON() {
    return {
      id: this.id,
      customer_id: this.customerId,
      base_portfolio_id: this.basePortfolioId,
      name: this.name,
      balance: this.balance,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

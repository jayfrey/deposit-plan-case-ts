import { customerPortfolioData } from "../data/CustomerPortfolioData";
import { depositPlanData } from "../data/DepositPlanData";
import { ICustomer } from "../interfaces/models/ICustomer";
import { ICustomerPortfolio } from "../interfaces/models/ICustomerPortfolio";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";

export class Customer implements ICustomer {
  static nextVal: number = 0;
  id: number;
  name: string;
  customerPortfolios?: ICustomerPortfolio[];
  depositPlans?: IDepositPlan[];

  constructor(name: string) {
    this.id = ++Customer.nextVal;
    this.name = name;
    this.refresh();
  }

  getId() {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getCustomerPortfolio() {
    return this.customerPortfolios;
  }

  refreshCustomerPortfolios() {
    this.customerPortfolios = customerPortfolioData.filter(
      (customerPortfolio: ICustomerPortfolio) => {
        return customerPortfolio.getCustomerId() == this.id;
      }
    );
  }

  refreshDepositPlans() {
    this.depositPlans = depositPlanData.filter((depositPlan: IDepositPlan) => {
      return depositPlan.getCustomerId() == this.id;
    });
  }

  refresh() {
    this.refreshCustomerPortfolios();
    this.refreshDepositPlans();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      // portfolios: this.portfolios,
      // depositPlans: this.depositPlans,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

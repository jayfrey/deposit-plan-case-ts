import { ICustomer } from "../interfaces/models/ICustomer";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";
import { IPortfolio } from "../interfaces/models/IPortfolio";
import { DepositPlan } from "./DepositPlan";

export class Customer implements ICustomer {
  static nextVal: number = 0;
  id: number;
  name: string;
  portfolios: IPortfolio[];
  depositPlans: IDepositPlan[];

  constructor(name: string) {
    this.id = ++Customer.nextVal;
    this.name = name;
    this.portfolios = [];
    this.depositPlans = [];
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

  setPortfolios(portfolios: IPortfolio[]) {
    this.portfolios = portfolios;
  }

  getPortfolios() {
    return this.portfolios;
  }

  setDepositPlans(depositPlans: IDepositPlan[]) {
    this.depositPlans = depositPlans;
  }

  getDepositPlans() {
    return this.depositPlans;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      portfolios: this.portfolios,
      depositPlans: this.depositPlans,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

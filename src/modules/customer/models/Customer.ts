import { customerPortfolioData } from "../../../data/CustomerPortfolioData";
import { fundDepositData } from "../../../data/FundDepositData";
import { ICustomer } from "../interfaces/ICustomer";
import { ICustomerPortfolio } from "../../portfolio/interfaces/ICustomerPortfolio";
import { IFundDeposit } from "../../deposit/interfaces/IFundDeposit";

export class Customer implements ICustomer {
  static nextVal: number = 0;
  id: number;
  name: string;
  customerPortfolios?: ICustomerPortfolio[];
  fundDeposits?: IFundDeposit[];

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
    return this.customerPortfolios || [];
  }

  getFundDeposits() {
    return this.fundDeposits || [];
  }

  refreshCustomerPortfolios() {
    this.customerPortfolios = customerPortfolioData.filter(
      (customerPortfolio: ICustomerPortfolio) => {
        return customerPortfolio.getCustomerId() == this.id;
      }
    );
  }

  refreshFundDeposits() {
    this.fundDeposits = fundDepositData.filter((fundDeposit: IFundDeposit) => {
      return fundDeposit.getCustomerId() == this.id;
    });
  }

  refresh() {
    this.refreshCustomerPortfolios();
    this.refreshFundDeposits();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      customer_portfolios: this.customerPortfolios?.map(
        (customerPortfolio: ICustomerPortfolio) => {
          return customerPortfolio.toJSON();
        }
      ),
      fund_deposits: this.fundDeposits?.map((fundDeposit: IFundDeposit) => {
        return fundDeposit.toJSON();
      }),
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

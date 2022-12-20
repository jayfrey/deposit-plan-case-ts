import { Settings } from "../constants/Settings";
import { ICustomer } from "../interfaces/models/ICustomer";
import { IDeposit } from "../interfaces/models/IDeposit";
import { IDepositPlan } from "../interfaces/models/IDepositPlan";
import { IDepositService } from "../interfaces/services/IDepositService";

export class DepositService implements IDepositService {
  customer: ICustomer;
  depositPlan: IDepositPlan;

  constructor(customer: ICustomer, depositPlan: IDepositPlan) {
    this.customer = customer;
    this.depositPlan = depositPlan;
  }

  depositFund() {
    var customerDepositPlans = this.customer.getDepositPlans();

    if (customerDepositPlans.length < Settings.MAX_DEPOSIT_PLAN) {
      this.depositPlan.getDeposits().forEach((deposit: IDeposit) => {
        var portfolio = deposit.getPortfolio();
        var currentBalance = portfolio.getBalance();
        var newBalance = currentBalance + deposit.getAmount();
        portfolio.setBalance(newBalance);
      });

      customerDepositPlans.push(this.depositPlan);
      this.customer.setDepositPlans(customerDepositPlans);
    } else {
      console.log("You've reached the maximum limit of deposit plan.");
    }
  }
}

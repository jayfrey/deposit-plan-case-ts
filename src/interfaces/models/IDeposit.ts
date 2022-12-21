import { IOutputter } from "../utils/IOutputter";

interface IDepositData {
  depositPlanId: number;
  customerPortfolioId: number;
  amount: number;
}

interface IDeposit extends IDepositData, IOutputter {
  id: number;

  getId: () => number;
  getDepositPlanId: () => number;
  getCustomerPortfolioId: () => number;
  getAmount: () => number;
}

export { IDepositData, IDeposit };

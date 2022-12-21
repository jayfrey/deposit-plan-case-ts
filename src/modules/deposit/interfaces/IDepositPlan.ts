import { IOutputter } from "../../shared/interfaces/IOutputter";

interface IDepositPlanData {
  fundDepositId: number;
  customerPortfolioId: number;
  amount: number;
}

interface IDepositPlan extends IDepositPlanData, IOutputter {
  id: number;

  getId: () => number;
  getFundDepositId: () => number;
  getCustomerPortfolioId: () => number;
  getAmount: () => number;
}

export { IDepositPlanData, IDepositPlan };

interface IDepositData {
  depositPlanId: number;
  customerPortfolioId: number;
  amount: number;
}

interface IDeposit extends IDepositData {
  id: number;

  getId: () => number;
  getAmount: () => number;
  getCustomerPortfolioId: () => number;
  getDepositPlanId: () => number;
}

export { IDepositData, IDeposit };

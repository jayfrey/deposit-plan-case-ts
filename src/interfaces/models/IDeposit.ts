interface IDepositData {
  customerPortfolioId: number;
  amount: number;
}

interface IDeposit extends IDepositData {
  id: number;

  getId: () => number;
  getAmount: () => number;
  getCustomerPortfolioId: () => number;
}

export { IDepositData, IDeposit };

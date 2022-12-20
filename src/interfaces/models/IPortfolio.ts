import { IOutputter } from "./IOutputter";

export interface IPortfolio extends IOutputter {
  id: number;
  name: string;
  balance: number;

  getId: () => number;
  setName: (name: string) => void;
  getName: () => string;
  setBalance: (balance: number) => void;
  getBalance: () => number;
}

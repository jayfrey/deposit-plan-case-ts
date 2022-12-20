import { IPortfolio } from "../interfaces/models/IPortfolio";

export class Portfolio implements IPortfolio {
  static nextVal: number = 0;
  id: number;
  name: string;
  balance: number;

  constructor(name: string) {
    this.id = ++Portfolio.nextVal;
    this.name = name;
    this.balance = 0.0;
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

  setBalance(balance: number) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      balance: this.balance,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

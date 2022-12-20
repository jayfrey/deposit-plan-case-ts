import { IPortfolio } from "../interfaces/models/IPortfolio";

export class Portfolio implements IPortfolio {
  static nextVal: number = 0;
  id: number;
  name: string;

  constructor(name: string) {
    this.id = ++Portfolio.nextVal;
    this.name = name;
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

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}

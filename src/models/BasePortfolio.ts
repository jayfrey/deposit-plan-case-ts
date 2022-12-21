import { IBasePortfolio } from "../interfaces/models/IBasePortfolio";

export class BasePortfolio implements IBasePortfolio {
  static nextVal: number = 0;
  id: number;
  name: string;

  constructor(name: string) {
    this.id = ++BasePortfolio.nextVal;
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

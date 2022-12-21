import { basePortfolioData } from "../../../data/BasePortfolioData";
import {
  IBasePortfolio,
  IBasePortfolioData,
} from "../interfaces/IBasePortfolio";
import { IBasePortfolioRepository } from "../interfaces/IBasePortfolioRepository";
import { BasePortfolio } from "../models/BasePortfolio";

export class BasePortfolioRepository implements IBasePortfolioRepository {
  findAll() {
    return basePortfolioData;
  }

  findById(id: number) {
    return (
      basePortfolioData.find((basePortfolio: IBasePortfolio) => {
        if (basePortfolio.getId() === id) {
          return basePortfolio;
        }
      }) || null
    );
  }

  create({ name }: IBasePortfolioData) {
    var basePortfolio = new BasePortfolio(name);
    basePortfolioData.push(basePortfolio);
    return basePortfolio;
  }
}

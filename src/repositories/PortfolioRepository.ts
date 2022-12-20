import { portfolios } from "../data/Portfolios";
import { IPortfolio, IPortfolioData } from "../interfaces/models/IPortfolio";
import { IPortfolioRepository } from "../interfaces/repositories/IPortfolioRepository";
import { Portfolio } from "../models/Portfolio";

export class PortfolioRepository implements IPortfolioRepository {
  findAll() {
    return portfolios;
  }

  findById(id: number) {
    return (
      portfolios.find((portfolio: IPortfolio) => {
        if (portfolio.getId() === id) {
          return portfolio;
        }
      }) || null
    );
  }

  create({ name }: IPortfolioData) {
    var portfolio = new Portfolio(name);
    portfolios.push(portfolio);
    return portfolio;
  }
}

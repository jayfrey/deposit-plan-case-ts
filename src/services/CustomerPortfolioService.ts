import { ICustomerService } from "../interfaces/services/ICustomerService";
import { ICustomerPorfolioService } from "../interfaces/services/ICustomerPorfolioService";
import { IPortfolioService } from "../interfaces/services/IPortfolioService";
import { CustomerService } from "./CustomerService";
import { PortfolioService } from "./PortfolioService";
import { CustomerPortfolioRepository } from "../repositories/CustomerPortfolioRepository";
import { ICustomerPortfolioRepository } from "../interfaces/repositories/ICustomerPortfolioRepository";

export class CustomerPorfolioService implements ICustomerPorfolioService {
  customerService: ICustomerService;
  portfolioService: IPortfolioService;
  customerPortfolioRepository: ICustomerPortfolioRepository;

  constructor() {
    this.customerService = new CustomerService();
    this.portfolioService = new PortfolioService();
    this.customerPortfolioRepository = new CustomerPortfolioRepository();
  }

  findAll() {
    return this.customerPortfolioRepository.findAll();
  }

  findById(id: number) {
    return this.customerPortfolioRepository.findById(id);
  }

  // To handle portfolio or customer when is not found
  create(data: { customerId: number; portfolioId: number }) {
    var customer = this.customerService.findById(data.customerId);
    var portfolio = this.portfolioService.findById(data.portfolioId);

    // if (customer != null && portfolio != null) {
    // var currentPortfolio = customer.getPortfolios();
    // currentPortfolio.push(portfolio);
    // customer.setPortfolios(currentPortfolio);
    return this.customerPortfolioRepository.create(data);
    // }
  }
}

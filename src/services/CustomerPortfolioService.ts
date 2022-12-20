import { ICustomerService } from "../interfaces/services/ICustomerService";
import { ICustomerPorfolioService } from "../interfaces/services/ICustomerPorfolioService";
import { IPortfolioService } from "../interfaces/services/IPortfolioService";
import { CustomerService } from "./CustomerService";
import { PortfolioService } from "./PortfolioService";
import { CustomerPortfolioRepository } from "../repositories/CustomerPortfolioRepository";
import { ICustomerPortfolioRepository } from "../interfaces/repositories/ICustomerPortfolioRepository";
import { ICustomerPortfolioData } from "../interfaces/models/ICustomerPortfolio";

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
  create(data: ICustomerPortfolioData) {
    var customer = this.customerService.findById(data.customerId);
    var portfolio = this.portfolioService.findById(data.portfolioId);

    if (customer != null && portfolio != null) {
      var customerPortfolio = this.customerPortfolioRepository.create(data);

      if (customerPortfolio != null) {
        customer.refresh();
        return customerPortfolio;
      }
    }
    return null;
  }
}

import { ICustomerService } from "../../customer/interfaces/ICustomerService";
import { ICustomerPorfolioService } from "../interfaces/ICustomerPorfolioService";
import { IBasePortfolioService } from "../interfaces/IBasePortfolioService";
import { CustomerService } from "../../customer/services/CustomerService";
import { BasePortfolioService } from "./BasePortfolioService";
import { CustomerPortfolioRepository } from "../repositories/CustomerPortfolioRepository";
import { ICustomerPortfolioRepository } from "../interfaces/ICustomerPortfolioRepository";
import { ICustomerPortfolioData } from "../interfaces/ICustomerPortfolio";

export class CustomerPorfolioService implements ICustomerPorfolioService {
  customerService: ICustomerService;
  basePortfolioService: IBasePortfolioService;
  customerPortfolioRepository: ICustomerPortfolioRepository;

  constructor() {
    this.customerService = new CustomerService();
    this.basePortfolioService = new BasePortfolioService();
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
    var basePortfolio = this.basePortfolioService.findById(
      data.basePortfolioId
    );

    if (customer != null && basePortfolio != null) {
      var customerPortfolio = this.customerPortfolioRepository.create(data);

      if (customerPortfolio != null) {
        customer.refresh();
        return customerPortfolio;
      }
    }
    return null;
  }
}

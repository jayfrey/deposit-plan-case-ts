import { ICustomerData } from "../interfaces/models/ICustomer";
import { ICustomerRepository } from "../interfaces/repositories/ICustomerRepository";
import { ICustomerService } from "../interfaces/services/ICustomerService";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class CustomerService implements ICustomerService {
  customerRepository: ICustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  findAll() {
    return this.customerRepository.findAll();
  }

  findById(id: number) {
    return this.customerRepository.findById(id);
  }

  create(data: ICustomerData) {
    return this.customerRepository.create(data);
  }
}

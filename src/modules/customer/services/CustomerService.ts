import { ICustomerData } from "../interfaces/ICustomer";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";
import { ICustomerService } from "../interfaces/ICustomerService";
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

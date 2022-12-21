import { ICustomer, ICustomerData } from "./ICustomer";
import { ICustomerRepository } from "./ICustomerRepository";

export interface ICustomerService {
  customerRepository: ICustomerRepository;

  findAll: () => ICustomer[];
  findById: (id: number) => ICustomer | null;
  create: (data: ICustomerData) => ICustomer;
}

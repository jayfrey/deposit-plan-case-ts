import { ICustomer, ICustomerData } from "../models/ICustomer";
import { ICustomerRepository } from "../repositories/ICustomerRepository";

export interface ICustomerService {
  customerRepository: ICustomerRepository;
  findAll: () => ICustomer[];
  findById: (id: number) => ICustomer | null;
  create: (data: ICustomerData) => ICustomer;
}

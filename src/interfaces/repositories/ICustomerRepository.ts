import { ICustomer, ICustomerData } from "../models/ICustomer";

export interface ICustomerRepository {
  findAll: () => ICustomer[];
  findById: (id: number) => ICustomer | null;
  create: ({ name }: ICustomerData) => ICustomer;
}

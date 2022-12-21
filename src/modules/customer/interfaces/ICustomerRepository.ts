import { ICustomer, ICustomerData } from "./ICustomer";

export interface ICustomerRepository {
  findAll: () => ICustomer[];
  findById: (id: number) => ICustomer | null;
  create: ({ name }: ICustomerData) => ICustomer;
}

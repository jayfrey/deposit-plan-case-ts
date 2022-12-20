import { customers } from "../data/Customers";
import { ICustomer, ICustomerData } from "../interfaces/models/ICustomer";
import { ICustomerRepository } from "../interfaces/repositories/ICustomerRepository";
import { Customer } from "../models/Customer";

export class CustomerRepository implements ICustomerRepository {
  findAll() {
    return customers;
  }

  findById(id: number) {
    return (
      customers.find((customer: ICustomer) => {
        if (customer.getId() === id) {
          return customer;
        }
      }) || null
    );
  }

  create({ name }: ICustomerData) {
    var customer = new Customer(name);
    customers.push(customer);
    return customer;
  }
}

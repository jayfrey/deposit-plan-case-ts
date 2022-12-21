import { customerData } from "../../../data/CustomerData";
import { ICustomer, ICustomerData } from "../interfaces/ICustomer";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";
import { Customer } from "../models/Customer";

export class CustomerRepository implements ICustomerRepository {
  findAll() {
    return customerData;
  }

  findById(id: number) {
    return (
      customerData.find((customer: ICustomer) => {
        if (customer.getId() === id) {
          return customer;
        }
      }) || null
    );
  }

  create({ name }: ICustomerData) {
    var customer = new Customer(name);
    customerData.push(customer);
    return customer;
  }
}

import { Settings } from "../../../constants/Settings";
import { IFundDepositData } from "../interfaces/IFundDeposit";
import { IFundDepositRepository } from "../interfaces/IFundDepositRepository";
import { ICustomerService } from "../../customer/interfaces/ICustomerService";
import { IFundDepositService } from "../interfaces/IFundDepositService";
import { FundDepositRepository } from "../repositories/FundDepositRepository";
import { CustomerService } from "../../customer/services/CustomerService";

export class FundDepositService implements IFundDepositService {
  customerService: ICustomerService;
  fundDepositRepository: IFundDepositRepository;

  constructor() {
    this.customerService = new CustomerService();
    this.fundDepositRepository = new FundDepositRepository();
  }

  findAll() {
    return this.fundDepositRepository.findAll();
  }

  findById(id: number) {
    return this.fundDepositRepository.findById(id);
  }

  create(data: IFundDepositData) {
    var customer = this.customerService.findById(data.customerId);

    if (customer != null) {
      if (customer.fundDeposits!.length < Settings.MAX_DEPOSIT_PLAN) {
        var fundDeposit = this.fundDepositRepository.create(data);

        if (fundDeposit != null) {
          customer.refresh();
          return fundDeposit;
        }
      } else {
        console.log(
          "You've reached the maximum number of deposit plans." +
            "The maximum number of deposit plans is " +
            Settings.MAX_DEPOSIT_PLAN
        );
      }
    }
    return null;
  }
}

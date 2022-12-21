import { Settings } from "../../../constants/Settings";
import { IDepositPlanData } from "../interfaces/IDepositPlan";
import { IDepositPlanRepository } from "../interfaces/IDepositPlanRespository";
import { ICustomerService } from "../../customer/interfaces/ICustomerService";
import { IDepositPlanService } from "../interfaces/IDepositPlanService";
import { DepositPlanRepository } from "../repositories/DepositPlanRepository";
import { CustomerService } from "../../customer/services/CustomerService";

export class DepositPlanService implements IDepositPlanService {
  customerService: ICustomerService;
  depositPlanRepository: IDepositPlanRepository;

  constructor() {
    this.customerService = new CustomerService();
    this.depositPlanRepository = new DepositPlanRepository();
  }

  findAll() {
    return this.depositPlanRepository.findAll();
  }

  findById(id: number) {
    return this.depositPlanRepository.findById(id);
  }

  create(data: IDepositPlanData) {
    var customer = this.customerService.findById(data.customerId);

    if (customer != null) {
      if (customer.depositPlans!.length < Settings.MAX_DEPOSIT_PLAN) {
        var depositPlan = this.depositPlanRepository.create(data);

        if (depositPlan != null) {
          customer.refresh();
          return depositPlan;
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

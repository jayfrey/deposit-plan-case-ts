import { IDepositPlanData } from "../interfaces/models/IDepositPlan";
import { IDepositPlanRepository } from "../interfaces/repositories/IDepositPlanRespository";
import { ICustomerService } from "../interfaces/services/ICustomerService";
import { IDepositPlanService } from "../interfaces/services/IDepositPlanService";
import { DepositPlanRepository } from "../repositories/DepositPlanRepository";
import { CustomerService } from "./CustomerService";

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
      var depositPlan = this.depositPlanRepository.create(data);

      if (depositPlan != null) {
        customer.refresh();
        return depositPlan;
      }
    }
    return null;
  }
}

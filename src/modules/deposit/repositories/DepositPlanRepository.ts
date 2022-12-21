import { depositPlanData } from "../../../data/DepositPlanData";
import { IDepositPlan, IDepositPlanData } from "../interfaces/IDepositPlan";
import { IDepositPlanRepository } from "../interfaces/IDepositPlanRespository";
import { DepositPlan } from "../models/DepositPlan";

export class DepositPlanRepository implements IDepositPlanRepository {
  findAll() {
    return depositPlanData;
  }

  findById(id: number) {
    return (
      depositPlanData.find((depositPlan: IDepositPlan) => {
        if (depositPlan.getId() === id) {
          return depositPlan;
        }
      }) || null
    );
  }

  create({ customerId, type }: IDepositPlanData) {
    var depositPlan = new DepositPlan(customerId, type);
    depositPlanData.push(depositPlan);
    return depositPlan;
  }
}

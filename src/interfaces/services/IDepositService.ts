import { ICustomer } from "../models/ICustomer";
import { IDeposit, IDepositData } from "../models/IDeposit";
import { IDepositPlan } from "../models/IDepositPlan";
import { IDepositRepository } from "../repositories/IDepositRespository";

export interface IDepositService {
  depositRepository: IDepositRepository;
  findAll: () => IDeposit[];
  findById: (id: number) => IDeposit | null;
  create: (data: IDepositData) => IDeposit;
}

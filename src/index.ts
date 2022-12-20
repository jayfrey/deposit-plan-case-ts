import { Customer } from "./models/Customer";
import { Portfolio } from "./models/Portfolio";

var customer = new Customer("Jay");
var highRiskPortfolio = new Portfolio("High risk");
var retirementPortfolio = new Portfolio("Retirement");

console.log(customer);
console.log(highRiskPortfolio);
console.log(retirementPortfolio);

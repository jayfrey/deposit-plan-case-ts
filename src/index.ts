import { Customer } from "./models/Customer";
import { Portfolio } from "./models/Portfolio";

import { ICustomer } from "./interfaces/models/ICustomer";
import { IPortfolio } from "./interfaces/models/IPortfolio";

function addPortfolios(customer: ICustomer, portfolios: IPortfolio[]) {
  var customer_portfolios = customer.getPortfolios();
  customer.setPortfolios(customer_portfolios.concat(portfolios));
}

function addPortfolio(customer: ICustomer, portfolio: IPortfolio) {
  var customer_portfolios = customer.getPortfolios();
  customer_portfolios.push(portfolio);
  customer.setPortfolios(customer_portfolios);
}

var customer = new Customer("Jay");
var highRiskPortfolio = new Portfolio("High risk");
var retirementPortfolio = new Portfolio("Retirement");

console.log(customer);
console.log(highRiskPortfolio);
console.log(retirementPortfolio);

addPortfolios(customer, [highRiskPortfolio, retirementPortfolio]);
// addPortfolio(customer, retirementPortfolio);

console.log("customer", customer.toJSON());

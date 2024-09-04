#!/usr/bin/env node
import inquirer from "inquirer";

const currency:any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([{
  name: "from",
  message: "enter from currency",
  type: "list",
  choices: ["USD", "EUR", "GBP", "INR", "PKR"]
},

{
    name: "to",
    message: "enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]
},

{
    name: "amount",
    message: "enter from amount",
    type: "number",
    
},
]);
let fromAmount = currency[user_answer.from] //exchange rate
let toAmount =currency[user_answer.to] //exchange rate
let amount =user_answer.amount
let baseamount = amount /fromAmount //usd base currency //4
let convertedAmount = baseamount *toAmount
console.log(convertedAmount);

//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);



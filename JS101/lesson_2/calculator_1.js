let rlSync = require('readline-sync');
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};


let num1 = Number(rlSync.question("Enter a number: \n"));
let num2 = Number(rlSync.question("Enter a second number: \n"));
let operation = rlSync.question("Enter a operator: \n");

function result (num1, num2, operation) {
  let result = operators[operation](num1, num2);
  console.log(result);
}

result(num1, num2, operation);

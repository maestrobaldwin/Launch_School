//Write a code that receives two integers from a user
//Then those integers are used with the following arthemtic operands
//addition, subtraction, product, quotient, remainder, and power

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("Choose your first number.\n"));
let num2 = Number(rlSync.question("Choose your second number.\n"));

function arithmetic (num1, num2) {
  console.log(`==> ${num1} + ${num2} = ${Math.round(num1 + num2)}`);
  console.log(`==> ${num1} - ${num2} = ${Math.round(num1 - num2)}`);
  console.log(`==> ${num1} * ${num2} = ${Math.round(num1 * num2)}`);
  console.log(`==> ${num1} / ${num2} = ${Math.round(num1 / num2)}`);
  console.log(`==> ${num1} % ${num2} = ${Math.round(num1 % num2)}`);
  console.log(`==> ${num1} ** ${num2} = ${Math.round(num1 ** num2)}`);

}

arithmetic(num1, num2);


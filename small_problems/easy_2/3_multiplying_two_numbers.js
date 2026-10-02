//Receive two numbers from the user as arguments to a function
//using those two arguments, multiply them together
//return the results

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("Provide a first number. \n"));
let num2 = Number(rlSync.question("Provide a second number. \n"));

function multiply (num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(num1, num2));

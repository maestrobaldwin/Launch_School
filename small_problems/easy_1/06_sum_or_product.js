/*

let rlSync = require('readline-sync');
let integer = parseInt(rlSync.question("Please enter an integer greater than 0: \n"));
let output = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. \n');

if(output === 's') {
  let sum = (integer*(integer + 1)) / 2;
  console.log(sum);
} else {
  let product = 1;
  for (let i = 1; i <= integer; i += 1) {
    product *= i;
  } console.log(product);
}

*/

//with helper functions
let computeSum = (targetNumber => {
  return (targetNumber * (targetNumber + 1)) / 2;
});

let computeProduct = (targetNumber => {
  let total = 1;
  for (let i = 1; i <= targetNumber; i += 1) {
    total *= i;
  } return total;
});

let rlSync = require('readline-sync');
let integer = parseInt(rlSync.question("Please enter an integer greater than 0: \n"));
let output = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. \n");

if (output === 's') {
  console.log(`The sum of the integers 1 through ${integer} is ${computeSum(integer)}.`);
} else if (output === 'p') {
  console.log(`The product of the integers 1 through ${integer} is ${computeProduct(integer)}.`);
} else {
  console.log("Unknown error.");
}


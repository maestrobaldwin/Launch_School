// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask user if they would like to do another calculation.
// Store messages in centralized hub (using JSON).


const rlSync = require('readline-sync');
const MESSAGE = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGE.welcome);

let answer = "y";

while (answer === 'y') {

  prompt(MESSAGE.firstNumber);
  let number1 = rlSync.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGE.invalidNumber);
    number1 = rlSync.question();
  }

  prompt(MESSAGE.secondNumber);
  let number2 = rlSync.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGE.invalidNumber);
    number2 = rlSync.question();
  }

  prompt(MESSAGE.operationChoice);

  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGE.invalidOperation);
    operation = rlSync.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
    default:
      output = "Please try again.";
  }


  prompt(`${MESSAGE.result} ${output}`);
  prompt(MESSAGE.again);
  answer = rlSync.question().toLowerCase();
  while ((answer !== 'y') && (answer !== 'n')) {
    prompt(MESSAGE.yesOrNo);
    answer = rlSync.question().toLowerCase();
  }
}
prompt(MESSAGE.goodbye);
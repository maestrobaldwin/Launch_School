// Ask the user which language they prefer.
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask user if they would like to do another calculation.
// If no, print goodbye statement and end program.


const rlSync = require('readline-sync');

const MESSAGE = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(MESSAGE.intro.language);
let language = rlSync.question().toLowerCase();
while ((language !== 'english') && (language !== 'italian') && (language !== 'german')) {
  prompt(MESSAGE.intro.invalidLanguage);
  language = rlSync.question().toLowerCase();
}
let langMessage = MESSAGE[language];

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(langMessage.welcome);

let answer = 'y';

while (answer === 'y' || answer === 's' || answer === 'j') {

  prompt(langMessage.firstNumber);
  let number1 = rlSync.question();

  while (invalidNumber(number1)) {
    prompt(langMessage.invalidNumber);
    number1 = rlSync.question();
  }

  prompt(langMessage.secondNumber);
  let number2 = rlSync.question();

  while (invalidNumber(number2)) {
    prompt(langMessage.invalidNumber);
    number2 = rlSync.question();
  }

  prompt(langMessage.operationChoice);

  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(langMessage.invalidOperation);
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


  prompt(`${langMessage.result} ${output}`);
  prompt(langMessage.again);
  answer = rlSync.question().toLowerCase();
  if (language === 'english') {
    while ((answer !== 'y') && (answer !== 'n')) {
      prompt(langMessage.yesOrNo);
      answer = rlSync.question().toLowerCase();
    }
  } else if (language === 'italian') {
    while ((answer !== 's') && (answer !== 'n')) {
      prompt (langMessage.yesOrNo);
      answer = rlSync.question().toLowerCase();
    }
  } else {
    while ((answer !== 'j') && (answer !== 'n')) {
      prompt (langMessage.yesOrNo);
      answer = rlSync.question().toLowerCase();
    }
  }
}

  /*
  while ((answer !== 'y') || (answer !== 's') || (answer !== 'j')) {
    prompt(langMessage.yesOrNo);
    answer = rlSync.question().toLowerCase();
  }
} */
prompt(langMessage.goodbye);
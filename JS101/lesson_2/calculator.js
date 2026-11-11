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

const APPROVE_LANG = ['en', 'it', 'de'];

let answer;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(MESSAGE.intro.language);
let language = rlSync.question().trim().toLowerCase();

if (language === 'english') {
  language = 'en';
} else if (language === 'italiano') {
  language = 'it';
} else if ((language === 'german') || (language === 'deutsche')) {
  language = 'de';
}

while (!APPROVE_LANG.includes(language)) {
  prompt(MESSAGE.intro.invalidLanguage);
  language = rlSync.question().trim().toLowerCase();
}
let langMessage = MESSAGE[language];

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(langMessage.welcome);

function getNumber(promptmsg, errorMsg) {
  prompt(promptmsg);
  let number = rlSync.question().trim();
  while (invalidNumber(number)) {
    prompt(errorMsg);
    number = rlSync.question();
  }
  return number;
}
function getAnswer(language, errorMsg) {
  const yesAnswer = {
    en: 'y',
    it: 's',
    de: 'j'
  };
  const yes = yesAnswer[language];
  let answer = rlSync.question().trim().toLowerCase();
  while (answer !== yes && answer !== 'n') {
    prompt(errorMsg);
    answer = rlSync.question().trim().toLowerCase();
  }

  return answer;
}

do {
  console.clear();

  let number1 = getNumber(langMessage.firstNumber, langMessage.invalidNum);
  let number2 = getNumber(langMessage.secondNumber, langMessage.invalidNum);

  prompt(langMessage.operationChoice);

  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(langMessage.invalidOperation);
    operation = rlSync.question();
  }

  let operator = {
    1: '+',
    2: '-',
    3: '*',
    4: '/'
  };

  function calculate(number1, number2, operation) {
    let num1 = Number(number1);
    let num2 = Number(number2);
    switch (operation) {
      case '1': return num1 + num2;
      case '2': return num1 - num2;
      case '3': return num1 * num2;
      case '4': return num1 / num2;
    }
  }

  let output = calculate(number1, number2, operation);

  if (output === Infinity) {
    prompt(`You cannot divide by 0`); //add all three languages to output
  } else {
    prompt(`${langMessage.result} ${number1} ${operator[operation]} ${number2} = ${output}`);
  };
  prompt(langMessage.again);
  answer = getAnswer(language, langMessage.yesOrNo);
} while (answer === 'y' || answer === 's' || answer === 'j');

prompt(langMessage.goodbye);
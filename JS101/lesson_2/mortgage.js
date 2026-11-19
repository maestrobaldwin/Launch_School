const MESSAGE = require('./mortgage.json');

const RL_SYNC = require('readline-sync');

const VALID_CHOICES = ['y', 'yes', 'n', 'no'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const PERCENT_DIVISOR = 100;
const MONTHS_IN_YEAR = 12;

function again() {
  prompt(MESSAGE["again"][0]);
  let answer = RL_SYNC.question();
  while (!VALID_CHOICES.includes(answer)) {
    prompt(MESSAGE["again"][2]);
    answer = RL_SYNC.question();
  }
  return answer === 'y' || answer === 'yes';
}

function loanAmountAndDuration(message, errorMsg) {
  prompt(message);
  let input = Number(RL_SYNC.question().trim());

  while (!Number.isFinite(input) || input <= 0) {
    prompt(errorMsg);
    input = Number(RL_SYNC.question().trim());
  }
  return Number(input.toFixed(2));
}

function interestRate(message, errorMsg) {
  prompt(message);
  let input = Number(RL_SYNC.question().trim());

  while (!Number.isFinite(input) || input === null || input === undefined
    || input < 0) {
    prompt(errorMsg);
    input = Number(RL_SYNC.question().trim());
  }
  if (input === 0) {
    return input;
  } else {
    return Number(input.toFixed(2)) / PERCENT_DIVISOR / MONTHS_IN_YEAR;
  }
}

function mortgagePayment(amount, interest, duration) {
  let payment;
  duration *= MONTHS_IN_YEAR;
  if (interest === 0) {
    payment = amount / duration;
  } else {
    payment = amount * (interest / (1 - Math.pow((1 + interest), (-duration))));
  }
  return Number(payment.toFixed(2));
}

function runCalculator() {
  let amount = loanAmountAndDuration(MESSAGE["amount"][0], MESSAGE["amount"][1]);
  let interest = interestRate(MESSAGE['interest'][0], MESSAGE['interest'][1]);
  let duration = loanAmountAndDuration(MESSAGE["duration"][0],MESSAGE['duration'][1]);

  return prompt(`Your monthly payment is $${mortgagePayment(amount, interest, duration)}`);
}

prompt(MESSAGE["welcome"]);

do {
  runCalculator();
} while (again());

prompt(MESSAGE['again'][1]);

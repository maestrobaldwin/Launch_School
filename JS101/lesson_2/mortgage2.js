const MESSAGE = require('./mortgage.json');

const RL_SYNC = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const PERCENT_DIVISOR = 100;
const MONTHS_IN_YEAR = 12;

prompt(MESSAGE["welcome"]);

function loanAmount(message, errorMsg) {
  prompt(message);
  let input = Number(RL_SYNC.question().trim());

  while (!Number.isFinite(input) || input <= 0) {
    prompt(errorMsg);
    input = Number(RL_SYNC.question().trim());
  }
  return Number(input.toFixed(2));
}

function durationLength(message, errorMsg) {
  prompt(message);
  let input = Number(RL_SYNC.question().trim());

  while (!Number.isFinite(input) || input <= 0) {
    prompt(errorMsg);
    input = Number(RL_SYNC.question().trim());
  }
  return Number(input.toFixed(2)) / MONTHS_IN_YEAR;
}

function interestRate(message, errorMsg) {
  prompt(message);
  let input = Number(RL_SYNC.question().trim());

  while (!Number.isFinite(input) || input === null || input === undefined || input < 0) {
    prompt(errorMsg);
    input = Number(RL_SYNC.question().trim());
  }
  if (input === 0) {
    return input;
  } else {
    return Number(input.toFixed(2)) / PERCENT_DIVISOR;
  }
}

function runCalculator(amount, interest, duration) {
  let amount = loanAmount(MESSAGE["amount"][0], MESSAGE["amount"][1]);
  let interest = interestRate(MESSAGE['interest'][0], MESSAGE['interest'][1]);
  let duration = durationLength(MESSAGE["duration"][0],MESSAGE['duration'][1]);
}
function MortgagePayment(amount, interest, duration) {
  let payment = amount * (interest / (1 - Math.pow((1 + interest),
    (-duration))));
  return Number(payment.toFixed(2));
}

console.log(MortgagePayment(amount, interest, duration));

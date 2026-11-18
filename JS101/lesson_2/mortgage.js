//Given three user inputs
//loan amount, Annual Percentage Rate and loan duration
//calculate monthly interest rate by APR / 12
//calculate loan duration in months by loan duration * 12
//using calculated monthly interest rate and monthly loan duration
//monthly payment equals 
//loan amount * (monthly interest / (1 - (1 + monthly interest)^-N))

const RL_SYNC = require('readline-sync');

//====================loan Amount=================
function loanAmount() {
  let input = Number(RL_SYNC.question('Enter the loan amount: '));

  while (!Number.isFinite(input) || input <= 0) {
    input = Number(RL_SYNC.question('Please try again. Enter a loan amount greater than 0: '));
  }

  return Number(input.toFixed(2));
}

let amount = loanAmount();

//====================interest rate===============

function interestRate() {
  let input = Number(RL_SYNC.question('Please enter the APR as a precent (Ex. 5.5): '));

  while (input <= 0 || !Number.isFinite(input)) {
    input = Number(RL_SYNC.question('Please try again. Enter an interest rate greater than 0: '));
  }

  return Number((input / 100).toFixed(3) / 12);
}

let interest = interestRate();
//====================duration====================
function loanDuration() {
  let input = Number(RL_SYNC.question('Please enter the loan duration in years: '));

  while (input <= 0 || !Number.isFinite(input)) {
    input = Number(RL_SYNC.question('Please try again. Enter a loan duration greater than 0: '));
  }

  return Number(input * 12);
}

let duration = loanDuration();
//===================mortgage calculation===================
function MortgagePayment(amount, interest, duration) {
  let payment = amount * (interest / (1 - Math.pow((1 + interest),
    (-duration))));
  return Number(payment.toFixed(2));
}

console.log(MortgagePayment(amount, interest, duration));

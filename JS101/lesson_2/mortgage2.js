//Given three user inputs
//loan amount, APR, and loan duration
//calculate APR / 12
//calculate duration * 12
//calculate monthly payment
//loan amount * (interest / (1 - (1 + interest)^-duration))

const RL_SYNC = require('readline-sync');

function userInput(prompt, prompt2) {
  let input = Number(RL_SYNC.question(prompt));

  while (!Number.isFinite(input) || input <= 0) {
    input = Number(RL_SYNC.question(prompt2));
  }

  return Number(input.toFixed(2));
}

let amount = userInput('Please enter the loan amount: ', 'Please try again. Enter a loan amount greater than 0: ');
let interest = ((userInput('Please enter the APR: ', 'Please try again. Enter an APR greater than 0 (Ex. 5.5): ') / 100 ) / 12);
let duration = (userInput('Please enter the loan duration in years: ', 'Please try again. Enter loan duration greater than 0: ') * 12);

function MortgagePayment(amount, interest, duration) {
  let payment = amount * (interest / (1 - Math.pow((1 + interest),
    (-duration))));
  return Number(payment.toFixed(2));
}

console.log(MortgagePayment(amount, interest, duration));

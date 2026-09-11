let rlSync = require('readline-sync');

console.log("What is the bill? ");
let bill = rlSync.prompt();
bill = parseFloat(bill);
console.log("What is the tip percentage? ");
let tipRate = rlSync.prompt();
tipRate = parseFloat(tipRate);
tipRate = tipRate/100;

let tip = tipRate * bill;
let totalBill = tip + bill;
console.log(`The tip is $${tip.toFixed(2)} and the total bill is $${totalBill.toFixed(2)}. \n We hope you had a wonderful experience. \n Please come again.`);


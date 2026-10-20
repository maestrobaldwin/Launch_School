/* Create a program that takes two user inputs, age and retirement age
Using the two inputs and the current year calculate
What year the user will retire AND how many more years until retirement

What is your age? - Input
At what age would you like to retire? - Second input

START
SET Age as GET user age
SET retirementAge as GET user's desired retirement age
SET year as current date year
SET yearsToRetirement as RetirementAge - Age
SET retirementYear as Current year + yearsToRetirement
PRINT It's currentYear. You will retire in retirementYear.
  You have only yearsToRetirement years of work to go!
END
*/


let rlSync = require('readline-sync');
let age = Number(rlSync.question("What is your age?\n"));
let retirementAge = Number(rlSync.question("At what age would you like to retire? \n"));
const year = new Date().getFullYear();

function logRetirementInfo(age, retirementAge, year) {
  let yearsToRetirement = retirementAge - age;
  let retirementYear = year + yearsToRetirement;
  console.log(` 
It's ${year}. You will retire in ${retirementYear}.
You have only ${yearsToRetirement} years of work to go!`);
}

logRetirementInfo(age, retirementAge, year);

//If new is not used with the date constructor,
//an error occurs because Date() returns a string
//and getFullYear is a method which requires an object
//new Date() returns an object
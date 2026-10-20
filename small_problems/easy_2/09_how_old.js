/* Write a program that randomly generates a whole number
number should be between 20 and 120 inclusively
The generated number should print to the console saying:
"Teddy is (number) years old!"

START
SET age as Random Number
SET saying as "Teddy is (number) years old!"
PRINT Saying.
END
*/

function teddyAge(min, max) {
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  let saying = `Teddy is ${age} years old!`;
  console.log(saying);
}

teddyAge(20, 120);

/* Further Exploration
Would it make a difference if we used the round method of the Math object?
Yes, because the round will round up at certain points.
floor always rounds down.
How to make it more robust so that if a user entered the min/max reversed
it would still work.
*/

function teddyAge2(min, max) {
  let top = max;
  let bottom = min;
  if (min > max) {
    top = min;
    bottom = max;
  }
  let age = Math.floor(Math.random() * (top - bottom + 1) + bottom);
  let saying = `Teddy is ${age} years old!`;
  console.log(saying);
}

teddyAge2(20, 120);

//better to seperate the age generation and the log output

function ageGenerator(min, max) { //this generates the age
  let top = max;
  let bottom = min;
  if (min > max) {
    top = min;
    bottom = max;
  }
  return Math.floor(Math.random() * (top - bottom + 1)) + bottom;
}

let generatedAge = ageGenerator(20, 120); //this sets the variable generatedAge to the random number function
console.log(`Teddy is ${generatedAge} years old!`); //this prints to the console



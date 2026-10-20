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

function teddyAge (min, max) {
  let age = Math.floor(Math.random() * (max - min)) + min;
  let saying = `Teddy is ${age} years old!`;
  console.log(saying);
}

teddyAge(20, 120);
/* Writing a program that takes a user input
The program then takes the user input and greets the user using the users input
IF the user addes an explamation poing, the greet should be all in caps

START
GET user name input
Does user input have an exclamation point at the end
ITERATE over user input for last character
IF last character YES - output should be all caps
IF last character NO - output should be normal
OUTPUT - user name + greeting
*/

let rlsync = require('readline-sync');
let name = rlsync.question("What is your name? \n");
let lastChar = name[name.length - 1];

if (lastChar === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
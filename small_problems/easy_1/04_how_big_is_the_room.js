const rlSync = require('readline-sync');
const SQMETERS_TO_FEET = 10.7639;
const SQFEET_TO_METERS = 0.092903;
let measurement = '';

do {
console.log('Are your calculations in meters of feet?');
measurement = rlSync.prompt();
measurement = measurement.toLowerCase();
if (measurement !== 'meters' && measurement !== 'feet') {
  console.log('Please select an appropriate measurement.');
}
} while (measurement !== 'meters' && measurement !== 'feet');

console.log('Enter the length of the room:');
let length = rlSync.prompt();
length = parseInt(length);

console.log('Enter the width of the room:');
let width = rlSync.prompt();
width = parseInt(width);

let area = length * width;

if(measurement === 'meters') {
  console.log(`The area of the room is ${area} square meters (${area * SQMETERS_TO_FEET} square feet).`);
} else {
  console.log(`The area of the room is ${area} square feet (${area / SQMETERS_TO_FEET} square meters).`);
};




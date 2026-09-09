const rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters:");
let width = rlSync.question("Enter the width of the room in meters:");
let sqM = length * width;
console.log(`The area of the room is ${sqM} square meters (${sqM * 10.7639} square feet).`);


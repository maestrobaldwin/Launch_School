// Write a function that takes any number and returns
// the negative of that number
// If the number is negative, it doesn't change

//Pseudocode:
//Take a number as an argument
//Compare it to 0
//If the number is equal to or greater than 0
//RETURN that number as a negative
//If the number is less than 0
//RETURN the number unchanged

//first answer

/*
function negative(num) {
  if (typeof num === 'number') {
    if (num >= 0) {
      return -num;
    } else {
      return num;
    }
  } else {
    return NaN;
  }
}
*/

function negative(num) {
  return num >= 0 ? -num : num;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));



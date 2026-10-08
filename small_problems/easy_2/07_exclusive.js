/* Given two arguments
  - Evaluate each argument
    - Return true ONLY if argument A is true OR argument B is true
    - Return false if both are false or both are true
*/

/*
function xor (a, b) {
  if (a && b) {
    a = false;
    return a;
  } else if (a) {
    a = true;
    return a;
  } else if (b) {
    b = true;
    return b;
  } else {
    return false;
  }
}
*/

function xor (a, b) {
  if ((a && !b) || (b && !a)) {
    return true;
  } else {
    return false;
  }
}


console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true
console.log(xor(1, 1) === true);
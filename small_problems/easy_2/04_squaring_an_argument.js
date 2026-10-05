//Rewrite the previous multiplying function to return the square of an argument

function multiply (num1, num2) {
  let result = num1 * num2;
  return result;
}

let square = (num) => {
  return multiply(num, num);
};

console.log(square(5) === 25);
console.log(square(-8) === 64);


//Further Exploration
let toThePower = (num, power) => {
  return multiply(num, 1) ** power;
};

console.log(toThePower(10, 2));
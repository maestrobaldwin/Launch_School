/* Given an array as an argument
write a function that will return every other element of the array
starting with index 1

START
INPUT - an array as an argument
Iterate through the array
Create a new array with the odd numbered indecise
*/

function oddities (array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i += 2) {
    oddArray.push(array[i]);
  }
  return oddArray;
}

function evenities (array) {
  let oddArray = [];
  for (let i = 1; i < array.length; i += 2) {
    oddArray.push(array[i]);
  }
  return oddArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenities(["abc", "def"])); // logs ['abc']
console.log(evenities([123])); // logs [123]
console.log(evenities([])); // logs []
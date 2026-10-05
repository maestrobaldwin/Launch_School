/* Write a function
The function will return the second to last word of a string
The string is passed to the function as an argument
*/

function penultimate (string) {
  let array = string.split(' ');
  return array[(array.length - 2)];
}

console.log(penultimate('last word') === 'last');
console.log(penultimate('Launch School is great!') === 'is');

// Edge cases: Strings with only one word

function penultimate2 (string) {
  let array = string.split(' ');
  if (array.length > 1) {
    return array[(array.length - (array.length / 2))];
  };
}

console.log(penultimate2('This is madness and.'));
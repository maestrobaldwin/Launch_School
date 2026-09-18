//Write a function that first determines the UTF-16 string value
//then it adds those values together
//and returns that value

//START
//SET string to an array
//For each element of the array deteremine the UTF-16 value
//Reduce the array to a single added number


function utf16Value(string) {
  let result = 0;
  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);
    result += charCode;
  }
  return result;
}
const OMEGA = '\u03A9';
console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));

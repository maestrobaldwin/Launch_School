/* Given a non-empty string argument
return the middle character if the string is odd
or the middle two characters if the string is even.

GET non-empty string
Determine if string is odd or even by dividing
  string length by 2 and setting the remainder to 0 for even
  if not even the string is odd
IF the string is odd, print the index of length divided by 2 and round up
IF the string is even, print the index of length divided by 2 and
  length divided my 2 + 1.
END
*/

function getMiddle(string) {
  let half = string.length / 2;
  if (string.length % 2 === 0) {
    let first = string[half - 1];
    let second = string[half];
    let answer = `${first}, ${second}`;
    return answer;
  } letreturn string[half];
}

console.log(getMiddle("I Love JavaScript"));
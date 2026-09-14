//Given two strings
//determine the length of each string
//Whichever string is the shortest start with that string
//concatinate the longer string to the shorter string
//then concatinate the shorter string to the longers string.
//Return the output

function shortLongShort (string1, string2) {
  if (string1.length < string2.length) {
    console.log(string1.concat(' ', string2, ' ', string1));
  } else {
    console.log(string2.concat(' ', string1, ' ', string2));
  }
}

shortLongShort('Hi', 'Teo');
shortLongShort('Taylor', 'Hi');


/*
function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    console.log(string1.concat(string2, string1));
  } else {
    console.log(string2.concat(string1, string2));
  }
}

shortLongShort('Timmy', 'Tim');
shortLongShort('Bob', 'Bobby');
*/

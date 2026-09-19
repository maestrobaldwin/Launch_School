/*Create a function that takes two arguments
Argument one is an array, each element is a part of a persons name
Argument two is an object that has two keys: title and occupation
and the approriate values. The function will return a greeting with
the person's full name and occupation.


START
GET argument 1 array
SET name to the combined or joined elements in the argument
Extract the object values into an array
SET occupation to the combined or joined object array
title and occupation of the second argument
OUTPUT a welcome that contains the two variables
END

*/

function greetings(array, object) {
  let name = array.join(' ');
  let occupation = Object.values(object).join(' ');
  console.log(`Hello ${name}! Nice to have a ${occupation} around.`);
}

let tom = ['Tom', 'Q.', 'Simpson'];
let fran = ['Fran', 'P.', 'Baldwin'];
let teo = ['Teo', 'Baldwin'];
let olivia = ['Olivia', 'Grey', 'Lawson'];

let musician = {
  title: 'Maestro',
  occupation: 'conductor'
};

let surgical = {
  title: 'exceptional',
  occupation: 'surgical assist'
};

let teacher = {
  title: 'national board',
  occupation: 'teacher'
}

greetings(tom, musician);
greetings(fran, teacher);
greetings(olivia, surgical);

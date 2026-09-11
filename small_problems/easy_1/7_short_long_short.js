function shortLongShort (string1, string2) {
  if (string1.length < string2.length) {
    console.log(string1.concat(' ', string2, ' ', string1));
  } else {
    console.log(string2.concat(' ', string1, ' ', string2));
  }
}

shortLongShort('Hi', 'Teo');
shortLongShort('Taylor', 'Hi');
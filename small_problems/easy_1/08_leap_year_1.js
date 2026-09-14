//Given a year provided by a user greater than 0
//Determine if the year is a leap year by determining
//Is the year evenly divisible by 4 and not divisible by 100 except for 400
//Output should be true or false

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}


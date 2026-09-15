//Given a year, determine if it is a leap year or not
//If the year is equal to or less than 1752 AND divisible by 4 it is a leap year
//If the year is greater than 1752 and divisible by 400
//or by 4 then it is a leap year
//If it is divisible by 100 but no 400 then it is not a leap year.

function isLeapYear (year) {
  if (year <= 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }  else {
    return false;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
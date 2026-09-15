//Given a number
//set a counter starting at 1 and a result at 0
// while counter is less than or equal to the given number
//determine if the counter is divisable by 3 or 5
//IF so add it to result
//Incriment counter by one
//return result

/*
START
SET result = 0
SET counter = 1
GET/SET number from user

WHILE counter <= number
  IF counter MOD 3 = 0 OR counter MOD 5 = 0
      SET result = counter + result
  END IF

  SET counter = counter + 1
END WHILE

READ result
END
*/

function multisum(number) {
  let result = 0;
  let counter = 1;
  while (counter <= number) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      result += counter;
    } //while counter can't be on the same line as the ending of the if statement
    counter += 1;
  } //function return can't be on the same line as the end of the while block
  return result;
}

console.log(multisum(20));
console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
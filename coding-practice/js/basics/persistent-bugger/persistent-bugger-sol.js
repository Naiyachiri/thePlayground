// reference url : https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// describe('Initial Tests', function () {
//   Test.assertEquals(persistence(39),3);
//   Test.assertEquals(persistence(4),0);
//   Test.assertEquals(persistence(25),2);
//   Test.assertEquals(persistence(999),4);
// });

//my solution

function persistence(num) {
  let count = 0;
  let testResult = num;
  while (testResult.toString().length !== 1) {
    count++;
    testResult = persistenceTest(testResult); // call persistenceTest repeatedly until our result is a single digit
  }
  return count;
}

function persistenceTest(num) {
  let n = num.toString(); // convert number to a string to assess the individual digits with string[index] property
  let digits = n.split(''); // generate an array with each digit
  let res = digits.reduce((total, num)=> (total*num)); // find the product of all the digits
  return res; // return value
}

//best practices solution

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString(); // this is the persistenceTest function converted to a single line
  }

  return times;
}

// most clever solution (included also because it uses es6 syntax)

const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) //using the ? operator and template literals to create string conversions of our number is pretty clever
    : 0; // it also resolves the two possible scenarios, a single digit parameter, and multi-digit parameters.
}
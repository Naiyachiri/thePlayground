// reference url: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


//personal solution
function findOdd(A) {
  let tally = {};
  let result;
  A.forEach((element) => {
    tally[element] ? tally[element]++: tally[element]=1;
  })
  for (let integer in tally) {
    if (tally[integer] % 2 === 1) {
      result = Number(integer);
    }
  }
  return result;
}

// best practice and clever
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// note that while this solution is clever it is conditional and from a non math major it is hardly understandable without extra research
// using the XOR(or bitwise operator '^') any n1^n1^n2 = n2 (nX being a unique number);
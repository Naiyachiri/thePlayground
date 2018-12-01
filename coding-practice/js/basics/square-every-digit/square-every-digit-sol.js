// reference url : https://www.codewars.com/kata/square-every-digit/train/javascript

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer


//personal solution
function squareDigits(num){
  // convert number to a string,
  //split it into an array,
  // square each value,
  // join the array back into a string,
  // convert to a number, and return
  let res = num.toString().split('').map((string)=>Number(string)*Number(string)).join('');
  return Number(res);
}

// best practices
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); // similar but javascript will calculate a string of numbers automatically without need for conversion using Number, but some comparison operations will return incorrect values so I personally don't recommend omitting the Number() conversion.
}
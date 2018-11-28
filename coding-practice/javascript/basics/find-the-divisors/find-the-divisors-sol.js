/* https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust)

example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

sample tests:
Test.assertDeepEquals(divisors(15), [3, 5]);
Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
Test.assertDeepEquals(divisors(13), "13 is prime");
*/

// personal solution
function divisors(integer) {
  let divisors = [];
  for (let i = 2; i< integer; i++) { // starting at an integer > 1 to search for factors
    if (integer % i === 0) { // check if the number can be completely divided by itself
      divisors = [...divisors, i]; // spread operator to push each divisor into our answer array
    }
  }
  let answer = (divisors.length > 0) ? divisors : `${integer} is prime`; // used ternary operator to simplify conditions
  return answer;
};
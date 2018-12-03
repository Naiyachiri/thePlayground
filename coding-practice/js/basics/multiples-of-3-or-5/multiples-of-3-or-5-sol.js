// url reference: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net

// function test(n, expected) {
//   let actual = solution(n)
//   Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
// }

// Test.describe("basic tests", function(){
//   test(10,23)
// })

//personal solution
function solution(number){
  let digits = [];
  if ((number / 3) >= 1) {
    //check multiples of 3 greater than 3, but less than number
    for(let i=3; i<number; i+=3) {
        digits = [...digits, i];
    }
  }
  if ((number/5) >= 1) {
    //check multiples of 5 greater than 5, but less than number
    for(let k=5; k<number; k+=5) {
      if(digits.indexOf(k) === -1){ // prevents duplicate entries into our array
        digits = [...digits, k];
      }
    }
  }
  return digits.length>0 ? digits.reduce((total, nxt) => total+nxt): 0;
}


//best practices

function solution(number){
  var sum = 0;

  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){ // filters each integer for divisibility by 3 or 5
      sum += i
    }
  }
  return sum;
}

// if you know math: the formula of arthemetic progression
function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}

// this solution avoids usage of loops so in terms of performance it is the best, but it really separates the math aficionado from normies.
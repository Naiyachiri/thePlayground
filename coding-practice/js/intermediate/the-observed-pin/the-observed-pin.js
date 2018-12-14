// reference url: https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we count on you!

// describe('example tests', function() {
//   var expectations = {
//     "8": ["5", "7", "8", "9", "0"],
//     "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//     "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
//   };

//   for (var pin in expectations) {
//     Test.assertSimilar(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
//   }
// });
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
function getPINs(observed) {
  // for each number pressed a set of possible numbers should be returned
  let keypad = [
    [1, 2, 3], // keypad[0][n]
    [4, 5, 6], // keypad[1][n]
    [7 ,8, 9], // keypad[2][n]
    [null,0,null] // keypad[3][n]
  ];
  let combinations = {  // based on number pressed returns adjacent numbers and current number
    '1': '124',
    '2': '1235',
    '3': '236',
    '4': '1457',
    '5': '24568',
    '6': '3569',
    '7': '478',
    '8': '57890',
    '9': '689',
    '0': '08',
  };

  let combos = [];
  observed.split('').forEach((number)=>{
    combos.push(combinations[number].split(''));
  });

  if (combos.length ===1) { // if it a one digit code
    return combos[0];
  }
  else { //
    function generateCombinations(arr) { // this generates all possible combinations out of an array of arrays
      return arr.reduce((acc,cur) => ( // given two arrays
        acc.map((ea) => // map the first array
          cur.map((eb) => // map the second array
            ea.concat(eb) // combine the first element form the first array with each element of the second array
          )
        ).reduce((acc,cur) => ( // combine the two arrays together
          acc.concat(cur)
        ), []) // these intiialize empty arrays to set as initial values
      ), [[]]) //
    }

    let ap = generateCombinations(combos); // returns an array of arrays containing each combinations
    ap = ap.map(o => o.join('')); // convert each combination array into a single string
    return ap;
  }
}

//highest voted solution:

function getPINs(observed) {
  var adjacent = [
    /* 0 */ [0, 8],
    /* 1 */ [1, 2, 4],
    /* 2 */ [1, 2, 3, 5],
    /* 3 */ [2, 3, 6],
    /* 4 */ [1, 4, 5, 7],
    /* 5 */ [2, 4, 5, 6, 8],
    /* 6 */ [3, 5, 6, 9],
    /* 7 */ [4, 7, 8],
    /* 8 */ [5, 7, 8, 9, 0],
    /* 9 */ [6, 8, 9]
  ];

  return observed
    .split('')
    .map(function(d) { return adjacent[d|0]; })
    .reduce(function(pa, da) {
      return da.reduce(function(pv, d) {
        return pv.concat(pa.map(function(p) {
          return '' + p + d;
        }));
      }, []);
    }, ['']);
}
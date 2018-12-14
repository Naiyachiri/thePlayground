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

describe('example tests', function() {
  var expectations = {
    "8": ["5", "7", "8", "9", "0"],
    "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
    "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
  };

  for (var pin in expectations) {
    Test.assertSimilar(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
  }
});

function getPINs(observed) {
  // TODO: This is your job, detective!
  function combo(x) { // returns a string of all possible number combinations given a keypress
    let keypad = [[1,2,3],
                  [4,5,6],
                  [7,8,9],
                  ['',0,'']];
    let coordinates = {
      '1': [0,0],
      '2': [0,1],
      '3': [0,2],
      '4': [1,0],
      '5': [1,1],
      '6': [1,2],
      '7': [2,0],
      '8': [2,1],
      '9': [2,2],
      '0': [3,0]
    };
  //note the number's position on the keypad == its coordinate value keypad[row][column]
  // keypad row#,column#
    let xx = coordinates[x][1]; // col
    let xy = coordinates[x][0]; // row
    console.log(`${xx} ${xy}`)
    //coordinates[row][column]
    let res = [
      xy-1 < 0 ? '' : keypad[xy-1][xx],// row-1 col
      xx-1 < 0 ? '' : keypad[xy][xx-1],// row col-1
      keypad[xy][xx],// row col
      xx+1 > 2 ? '' : keypad[xy][xx+1],// row col+1
      xy+1 >= 3 ? xy+1 === 3 ? keypad[3][0] : '': keypad[xy+1][xx]// row+1 col
      ];
    res = res.join('');
    return res;
  }
  if (observed.length === 1) {
    return combo(observed).split('');
  } if (observed.length > 1) {
    let comboArr = [];
    for (let i=0;i<observed.length;i++){
      comboArr.push(combo(observed[i])); // [124,124]
    }
    comboArr = comboArr.map((element) => element.split('')); // [[1,2,4],[1,2,4],[1,2,4]]
    let seed = [];

    console.log(seed);
  }
  // we'll come back to this one

}
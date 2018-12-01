// reference url: https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa',
// "Must work with two names")
// Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// Test.assertEquals(list([]), '', "Must work with no names")

// personal solution
// note the parameter is an array of objects with a key called 'name' which yields the string of a name.

function list(names){
  let string = '';
  let listOfNames = names.forEach((value, index)=> {
    if (index === 0) {
      string = value.name; // begin the string with the first name of the list
      break;
    }
    else if (index === names.length-1) { // if it is the final name concatenate with an &
      string = string + ' & ' + value.name;
      break;
    }
    string = string +', ' + value.name;  // add each name object to our list of names
  } );
  return string;
}

// best practices - uses reduce instead of forEach (reduce best fits the desired result, to reduce a list into a single item)

function list(names){
  return names.reduce(function(prev, current, index, array){ // this could be converted to an arrow function
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
// reference url : https://www.codewars.com/kata/vowel-count/train/javascript
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// describe("Case 1", function(){
//   it ("should be defined", function(){
//       Test.assertEquals(getCount("abracadabra"), 5)
//   });
// });


// personal solution
function getCount(str) {
  let vowelsCount = 0;
  let vowels = /[aeiou]/g; // regexp that finds vowels; I recommend https://regexr.com/ if you want to have fun with regex.
  (str.match(vowels) === null) ? vowelsCount = 0 : vowelsCount = str.match(vowels).length; // set 0 if not matches; otherwise set vowelsCount to number of matches
  return vowelsCount;
}


// best practices solution
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length; // clean
  // this checks if the str matches in any vowels then (if it returns null-- which is a falsy value it will use the length of an empty array instead) very clever.
}

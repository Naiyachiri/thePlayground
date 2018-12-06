// reference url: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//personal solution
function scramble(str1, str2) {
  let arrayStr1 = str1.split(''); // generate arrays from our parameters to use with array methods
  let arrayStr2 = str2.split('');
  let result = true; // initialize the result to be true if the loop finishes
  arrayStr2.forEach((letter)=> {
    if (arrayStr1.indexOf(letter) === -1) { // set up condition in which if at anypoint any letter is not found in arrayStr1 we return false
      result = false;
      return;
    } else {
      arrayStr1.splice(arrayStr1.indexOf(letter), 1);
    }
  });
  return result;
 }

 // attempts at optimizing the code -- we are trying to reduce the number of loops required and using more performant regex reliant methods
 function scramble(str1, str2) {
  for ( let i=0; i<str2.length; i++) {
    if(str1.match(str2[i])) {
      str1 = str1.replace(str2[i], '');
      str2 = str2.replace(str2[i], '0');
    }
  }
 let zerosOnly = /[^0]/; // matches true with anything that does not contain 0
 console.log('str1: ' + str1+ ' str2: ' + str2);
 if (str2.match(zerosOnly) !== null) {
   return false;
 } else {
   return true;
 }
}

// best practices; note not many upvotes were in the solutions in general for this kata
 // essentially the 'hash table' vs array performance is O(1) vs O(n);
 // it is a combination of the idea that an array is a complete set of 0, 1, 2... n whereas an object does not function based of a numerical key system
 //additional reading: https://stackoverflow.com/questions/12020984/hash-table-why-is-it-faster-than-arrays
 // https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript
 // https://www.kirupa.com/html5/hashtables_vs_arrays.htm

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {}); // this generates a letter tracking object which keeps count of each letter in the first string
  return str2.split("").every((character) => --occurences[character] >= 0); // this checks to make sure no letter occurences are negative (denoting that that str2 could not be generated from str1)
}
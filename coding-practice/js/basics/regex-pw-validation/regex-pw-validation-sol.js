// reference url: https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// Test.expect(validate('djI38D55'), 'djI38D55 - Expected true');
// Test.expect(!validate('a2.d412'), 'a2.d412 - Expected false');
// Test.expect(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
// Test.expect(!validate('!fdjn345'), '!fdjn345 - Expected false');
// Test.expect(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
// Test.expect(!validate('123'), '123 - Expected false');
// Test.expect(!validate('abc'), 'abc - Expected false');
// Test.expect(validate('Password123'), 'Password123 - Expected true');

//initial solution
function validate(password) {
  //https://regexr.com/ is super useful for creating regex
  //at least 6 chracters  regex = /\w{6,}/g
  let checkLength = /\w{6,}/g;
  let checkSpecial = /[\W]/g;
  let checkLower = /[a-z]/g;
  let checkUpper = /[A-Z]/g;
  let checkNum = /[0-9]/g
  let res = password.match(checkLength) ? password.match(checkLower) ? password.match(checkUpper) ? password.match(checkNum) ? password.match(checkSpecial) ? false : true : false : false : false: false;


  return res;
}

 /**
  * positive lookahead is used here to ensure that at least one of each character set is available
  * you need to allow every character (.*) before your lookahead character set,
  * except you want to ensure the expression starts with i.e. a lowercase character.
  * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
  * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
  * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
  **/

// attempting to condense regex into a single line
//^(?=[a-zA-Z0-9]{6,}$) allows us to match any string with the allowed characters (alphanumeric) and atleast 6
//(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]) act as conditional statements which check to make sure at least 1 instance of lowercase, uppercase and number is present
function validate(password) {
  return /^(?=[a-zA-Z0-9]{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*/.test(password);
}
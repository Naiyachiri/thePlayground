// url reference: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

//personal solution
function validBraces(braces){
  let stack = [];
  let braceTable = {
    '(':')',
    '[': ']',
    '{':'}',
  }
  let result = true;
  console.log(braces);
  braces.split('').forEach(function(char, index) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char); // opening brace push to our stack
    }
    if (char === ')' || char === ']' || char === '}') {
      // check last stack item
      if (stack.length === 0) { // if stack is empty when receiving an closing bracket return false
        result = false;
      }
      if (braceTable[stack[stack.length-1]] === char) { // if the char is the correct closing string
        let popped = stack.pop();
      } else { // the braces are invalid
      result = false;
      }
    }
  });
  if(stack.length !== 0) {
  result = false;
  }
  return result;
}

// best practices

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' }; // the naming for this makes it easier to follow along
  var stack = [];
  var currentChar; // tracking the current char results in using a different set of conditions to test if the stack should be popped

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

// most clever

function validBraces(braces){
  while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")} // this works by looking for any pair {}[]() and then replacing them with '', which ultimately leads to any single un matched brace remaining to return false-- very clever
  return !braces.length;
 }
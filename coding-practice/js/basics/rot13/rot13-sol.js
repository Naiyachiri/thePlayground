//reference url: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using "encode" in Python is considered cheating.

// Test.describe("Rot13", function(){
//   Test.it("test", function(){
//     Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
//   })
//   Test.it("Test", function(){
//     Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))
//   })
// })

// personal solution
function rot13(message){
  // str.charCodeAt(0); char -> uni
  //String.fromCharCode(); -> uni -> char
  // a-z 097-122[-71] A-Z 065-090[-39]
  // (uni - 39) % 26 === +13 = new letter
  let msgAr = message.split('');
  msgAr = msgAr.map((letter) => {
    if (letter.match(/[^A-Za-z]/)) { // check if it is non alphanumeric
    return letter; // return unchanged
    }

  let rot13val = letter.charCodeAt(0);
    (rot13val >= 97 && rot13val <= 122) ? rot13val = String.fromCharCode(((rot13val-97+13)%26)+97) :
    rot13val = String.fromCharCode(((rot13val-65+13)%26)+65)
    // order of operations is super important to returning the correct value here
    // steps:
    // 1) convert rot13val to its charCode
    // 2) convert rot13val to its alphanumeric index value
    // 3) shift index value by desired quantity (13 in this case)
    // 4) convert back to its letter value (reverse the process above);
    return rot13val;
  });
  let res = msgAr.join('');
  return res;
}


// highest voted clever (note best practices as well but only had 63 votes)
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
//note this requires a hard coded variable which will translate between the letters in each set of letters ( note that this will not allow you to easily switch the shifted integer without recreating an entirely new set of letters)
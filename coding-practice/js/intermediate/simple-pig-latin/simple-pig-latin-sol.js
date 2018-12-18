// reference url: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//personal solution: used .shift and .pop methods with a condition that checked that the char was an alphabet value;

function pigIt(str){
  let words = str.split(' ');
  function pigWord(word){
    let pigWord;
    //String.fromCharCode(#)
    // word.charCodeAt(index)
    if (word.charCodeAt(0) >= 65  && word.charCodeAt(0) <= 95 || word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) { // check if its a valid alphabet letter
      pigWord = word.split('');
      let prefix = pigWord.shift();
      prefix += 'ay';
      pigWord.push(prefix);
      return pigWord.join('');
    }
    else {
      return word;
    }
  };
    words.forEach((word, index) => {
      words[index] = pigWord(word);
    });
    return words.join(' ');
}

// most clever solution: uses regex
// I prefer regex solutions, but still need more practice with it
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3"); // this creates three capture groups and tells the script what to replace each with
  // (\w): any alphabet char | (\w*): any # of alphabet chars | (\s#|$): matches in any whitespace character OR the end of the string
  // second param tells the regex what to replace it with
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace for substring replacement documentation
}
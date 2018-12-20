// reference url: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");

// solution based off of DOM elements
function domainName(url){
  let urlElement = document.createElement('a'); //rather than using a regex we could just use js's built-in parser
  urlElement.setAttribute('href', url); // sets element to url
  return urlElement.hostname.split('.')[0];
}

// regex solution
function domainName(url){
  let urlregex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim;
  // /^(?:https?:\/\/)? capture groups that separate between
  // (?:[^@\n]+@)?
  // (?:www\.)?
  // ([^:\/\n?]+)
  let splitURL = url.split(urlregex);
  return splitURL[1].split('.')[0];
}

//http://google.com
//http://google.co.jp
//www.xakep.ru
//https://youtube.com
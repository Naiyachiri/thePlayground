// url ref: https://www.codewars.com/kata/5739174624fc28e188000465/train/javascript

// A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

// Task
// Create a poker hand that has a method to compare itself to another poker hand:

// PokerHand.prototype.compareWith = function(hand){...};
// A poker hand has a constructor that accepts a string containing 5 cards:

// var hand = new PokerHand("KS 2H 5C JD TD");
// The characteristics of the string of cards are:

// Each card consists of two characters, where
// The first character is the value of the card: 2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
// The second character represents the suit: S(pades), H(earts), D(iamonds), C(lubs)
// A space is used as card separator between cards
// The result of your poker hand compare can be one of these 3 options:

// var Result =
// {
//     "win": 1,
//     "loss": 2,
//     "tie": 3
// }
/* describe("If a poker hand is compared to another poker hand then:", function () {

  it("Highest straight flush wins", function() { assert(Result.loss, "2H 3H 4H 5H 6H", "KS AS TS QS JS");});
  it("Straight flush wins of 4 of a kind", function() { assert(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD");});
  it("Highest 4 of a kind wins", function() { assert(Result.win, "AS AH 2H AD AC", "JS JD JC JH 3D");});
  it("4 Of a kind wins of full house", function() { assert(Result.loss, "2S AH 2H AS AC", "JS JD JC JH AD");});
  it("Full house wins of flush", function() { assert(Result.win,  "2S AH 2H AS AC", "2H 3H 5H 6H 7H");});
  it("Highest flush wins", function() { assert(Result.win, "AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H");});
  it("Flush wins of straight", function() { assert(Result.win, "2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C");});
  it("Equal straight is tie", function() { assert(Result.tie, "2S 3H 4H 5S 6C", "3D 4C 5H 6H 2S");});
  it("Straight wins of three of a kind", function() { assert(Result.win, "2S 3H 4H 5S 6C", "AH AC 5H 6H AS");});
  it("3 Of a kind wins of two pair", function() { assert(Result.loss, "2S 2H 4H 5S 4C", "AH AC 5H 6H AS");});
  it("2 Pair wins of pair", function() { assert(Result.win, "2S 2H 4H 5S 4C", "AH AC 5H 6H 7S");});
  it("Highest pair wins", function() { assert(Result.loss, "6S AD 7H 4S AS", "AH AC 5H 6H 7S");});
  it("Pair wins of nothing", function() { assert(Result.loss, "2S AH 4H 5S KC", "AH AC 5H 6H 7S");});
  it("Highest card loses", function() { assert(Result.loss, "2S 3H 6H 7S 9C", "7H 3C TH 6H 9S");});
  it("Highest card wins", function() { assert(Result.win, "4S 5H 6H TS AC", "3S 5H 6H TS AC");});
  it("Equal cards is tie", function() { assert(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C");});
});
*/

// function assert(expected, player, opponent){
//   var p = new PokerHand(player);
//   var o = new PokerHand(opponent);
//   Test.assertEquals(p.compareWith(o), expected);
// }


/** hand types
 * high card
 * pair
 * two pair
 * three of a kind
 * straight
 * flush
 * full house
 * four of a kind
 * straight flush
 * royal flush
 */
let Result = { "win": 1, "loss": 2, "tie": 3 };

let values = { // object of all the values of each card
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  'T':10,
  'J':11,
  'Q':12,
  'K':13,
  'A':14
};

let suits = ['D','C','S','H'];
let handType = [
  'high card', // highest value card
  'pair', // two cards of the same value
  'two pair', // two sets of pairs
  'three of a kind', // three cards of the same value
  'straight', // five cards in sequential order with the ace before a 2 or after a king
  'flush', // five cards of the same suit
  'full house', // three of a kind and a pair in a single hand
  'four of a kind', // four cards of the same value
  'straight flush', // five cards in sequential order of the same suit
  'royal flush' // straight flush from ace to ten
];

function checkHandVsType(hand, type) {
  let handAr = hand.split(' ').sort();
  switch (type) {
    case 'royal flush':
      checkRF(handAr);
      break;
    case 'straight flush':
      checkSF(handAr);
      break;
    case 'four of a kind':
      checkFOAK(handAr);
      break;
    case 'full house':
      checkFH(handAr);
      break;
    case 'flush':
      checkF(handAr);
      break;
    case 'straight':
      checkS(handAr);
      break;
    case 'three of a kind':
      checkTOAK(handAr);
      break;
    case 'two pair':
      checkTP(handAr);
      break;
    case 'pair':
    checkP(handAr);
    default: // high card
    checkHC(handAr);
    break;
  }
}
//check three of a kind
//check pair

// if flush + straight -> check straight flush -> royal flush
// if pair + three of a kind -> check full house
// if none -> check high card

// all our hand evaluators must take an array of elements which represents each cards value ex: '4S 5H 6H TS AC'


let CFOAK = (hand) => { //checkFourOfAKind
  let res = hand.split(' ').sort(); // convert hand string to an array of cards
  console.log(res);
  //store the first card to begin checking for same value cards
  let checkValue = res[0][0]; // set the value to begin checking against the hand
  let kindCount = 0; // storing the number of same value cards
  for(let i=1;i<res.length;i++) {
    if(res[i][0] === checkValue) {
      console.log(checkValue);
      kindCount++;
    } else {
      checkValue = res[i][0];
      kindCount = 1;
    }
  }
  console.log(kindCount);
  if (kindCount >= 4) {
    return true;
  } else {
    return false;
  }
};

let CFF = (hand) => { // checkForFlush
  let res = hand.split(' ').sort(); // convert hand string to an array of cards
  console.log(res);
  let suit = res[0][1]; // the flush suit
  let mismatch = 0;
  res.forEach((card) => { // push all the suits on to our flush holder
    console.log(suit + ' card: '+ card);
    if (card[1] !==  suit) {
      mismatch++;
    }
  });
  if (mismatch > 0) {
    return false;
  } else {
    return true;
  }
}

let CFS = (hand) => { // checkForStraight
  let res = hand.split(' ').sort(); // convert hand string to an array of cards
  console.log(res);
  let init = res[0][0]; //initial value
  let end = res[res.length-1][0]; // last value
  let straightCt = 0;
  for (let i=init,k=0; i<end;i++,k++) {
    console.log(res[k][0] + ' vs. ' + i);
    if (res[k][0] != i){ // note: we don't use two '=' because res[k][0] returns a string but `i` is an number
      straightCt ++;
    };
  }
  console.log(straightCt);
  if (straightCt > 0) {
    return false;
  } else {
    return true;
  }
};

let CFTOAK = (hand) => { // checkForThreeOfAKind
  let res = hand.split(' ').sort(); // convert hand string to an array of cards
  console.log(res);
  // create a hash map which will tally up quantities of each value
  let hash = {};
  res.forEach((card) => {
    if(hash[card[0]] === undefined) {
      hash[card[0]] = 0; // initialize the property
    }
      hash[card[0]]++;
  });
  let setOfThree = 0;
  let keys = Object.getOwnPropertyNames(hash);
  keys.forEach((property) => {
    if (hash[property] === 3) {
      setOfThree = property;
    }
  });
  console.log(hash);
  if (setOfThree > 0) {
    return 'Three of a kind: ' + setOfThree;
  } else {
    return false;
  }
};

let CFP = (hand) => { // checkForAPair
  let res = hand.split(' ').sort(); // convert hand string to an array of cards
  console.log(res);
  // create a hash map which will tally up quantities of each value
  let hash = {};
  res.forEach((card) => {
    if(hash[card[0]] === undefined) {
      hash[card[0]] = 0; // initialize the property
    }
      hash[card[0]]++;
  });
  let pair = 0;
  let keys = Object.getOwnPropertyNames(hash);
  keys.forEach((property) => {
    if (hash[property] === 2) {
      pair = property;
    }
  });
  console.log(hash);
  if (pair > 0) {
    return 'High Pair of : ' + pair;
  } else {
    return false;
  }
};


function PokerHand(hand) {
  function evalHand(hand) {
    let res = hand.split(' ');
    res = res.sort();
    return res;
  }
}

PokerHand.prototype.compareWith = function(hand){
    return Result.tie;
}
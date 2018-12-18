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

//
var Result = { "win": 1, "loss": 2, "tie": 3 }

function PokerHand(hand) {
}

PokerHand.prototype.compareWith = function(hand){
    return Result.tie;
}
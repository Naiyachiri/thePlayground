// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//personal solution

function highAndLow(numbers){
  let array = numbers.split(' ');
  let highest;
  let lowest;
  array = array.map((string) => Number(string));
  array.map((value) => {
    highest === undefined ? highest = value
    : (highest < value) ? highest = value : console.log(highest + ' still largest');
    lowest === undefined ? lowest = value
    : (lowest > value) ? lowest = value : console.log(lowest + ' still smallest');
  })
  return `${highest} ${lowest}`;
}

// best practices solution

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number); // split them into an array and convert the values to Numbers in one line
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers); // Math.max and Math.min are built in object methods that allow us to find the largest and smallest of a set of numbers
}

//personal PREFERRED best practices solution

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`; // this avoids the use of .apply, which is unnecessary as the .min method can take strings and still find the correct number; it also avoids using map which reduces an entire loop through the method.
  // much cleaner and efficient.
}
//ref url : https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");


function formatDuration (seconds) {
  //year, day, hour, minute, second
  // convert seconds to each of the units of time
  let yr = seconds / 60 / 60 / 24 / 365; // min, hr, day, year
  let day = seconds / 60 / 60 / 24;
  let hr = seconds / 60 / 60;
  let min = seconds / 60;

  let yStr, dStr, hStr, mStr, sStr;
  yStr = dStr = hStr = mStr = sStr = ''; // initialize values of interest as blank strings

  let totalS = seconds; // tracking total seconds
  if (yr > 1) {
    let iYr = Math.floor(yr); // rounded to lowest whole
    yStr = `${iYr} years`;
    totalS -= iYr*60*60*24*365 // subtract total years in seconds from total seconds
    // needs to go down units for remaining seconds listing day, hour, minute, and second
  } else if (yr === 1) { // if it is exactly 1 year
    yStr = `${yr} year`;
  }
  else { // <1 year
    if (day > 1) {
      let iDay = Math.floor(day); // rounded to lowest whole
      dStr = `${iDay} days`;
      totalS -= iDay*60*60*24 // subtract total days in seconds from total seconds
          // needs to go down units for remaining seconds listing day, hour, minute, and second
    } else if (day === 1) { // if it is exactly 1 year
      dStr = `${day} day`;
    }
    else { // <1 day
      if (hr > 1) {
        let iHr = Math.floor(hr); // rounded to lowest whole
        hStr = `${iHr} hours`;
        totalS -= iHr*60*60 // subtract total days in seconds from total seconds
            // needs to go down units for remaining seconds listing day, hour, minute, and second
      } else if (hr === 1) { // if it is exactly 1 year
        hStr = `${hr} hour`;
      }
      else { // <1 hr
        if (min > 1) {
          let iMin = Math.floor(min); // rounded to lowest whole
          mStr = `${iMin} minutes`;
          totalS -= iMin*60 // subtract total days in seconds from total seconds
              // needs to go down units for remaining seconds listing day, hour, minute, and second
        } else if (min === 1) { // if it is exactly 1 year
          mStr = `${min} min`;
        }
        else { // <1 min
          if (seconds > 1) {
            sStr = `${seconds} seconds`
          } else {
            sStr = `${seconds} second`
          }
        }
      }
     }
  }

  console.log(totalS + ' seconds remaining'); // return total remaining seconds

  let returnStr = `${yStr}${dStr}${hStr}${mStr}${sStr}`;
  // let min = seconds / 60;
  // let hr = min / 60;
  // let day = hr / 24;
  // let yr = day / 365;
  return returnStr;
}
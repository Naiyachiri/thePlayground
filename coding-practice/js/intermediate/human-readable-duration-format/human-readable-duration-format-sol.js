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

 // my intial solution; its very long and high repetitions
 // places for improvement might be to create a separate recursive function which filters the remaining time through each smaller unit of time rather than having each for loop shown in the example
 // alternatively having a key values of each unit of time pre-converted to seconds then simply subtracting the largest whole integer multple from our total seconds and moving down the keys in a large to smaller unit of time might be more efficient
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
  if (totalS === 0) {
    return 'now';
  }
  console.log(totalS);
  if (yr > 1) { // check if time divisible by year
    console.log('checking years')
    let iYr = Math.floor(yr); // rounded to lowest whole
    yStr = (iYr === 1) ? mStr = `${iYr} year` : mStr = `${iYr} years`; // depending on if the rounded down value is 1 or not
    totalS -= iYr*31536000 // subtract total years in seconds from total seconds
    if (totalS > 0) { // check remainder for days
      day = Math.floor(totalS / 86400); // find number of days remaining
      if (day > 1) {
        totalS -= day*86400;
        dStr = `${day} days`;
      } else if (day === 1) {
        totalS -= day*86400;
        dStr = `${day}} day`;
      }
      if (totalS > 0) { // check remainder for hours
        console.log('checking hr');
        hr = Math.floor(totalS / 3600);
        if (hr > 1) {
          totalS -= hr*3600;
          hStr = `${hr} hours`;
        } else if (hr === 1){
          totalS -= hr*3600;
          hStr = `${hr} hour`;
        }
      }
      if (totalS > 0) { //check remainder for minutes
        console.log('checking min');
        min = Math.floor(totalS / 60);
        if (min > 1) {
          totalS -= min*60;
          mStr = `${min} minutes`
        } else if (min === 1) {
            totalS -= min*60;
            mStr = `${min} minute`
          }
        }
      }
      if (totalS > 0) { // check remainder for seconds
        console.log('checking sec');
        sStr = `${totalS} seconds`;
      }
      if (totalS === 1) {
        sStr = `${totalS} second`;
      }
    }
    else if (yr === 1) { // if it is exactly 1 year
    yStr = `${yr} year`;
  }
  else { // <1 year
    if (day > 1) {
      let iDay = Math.floor(day); // rounded to lowest whole
      dStr = (iDay === 1) ? mStr = `${iDay} day` : mStr = `${iDay} days`; // depending on if the rounded down value is 1 or not
      totalS -= iDay*60*60*24 // subtract total days in seconds from total seconds
        if (totalS >0) { // check remainder for hours
          console.log('checking hr');
          hr = Math.floor(totalS / 3600);
          if (hr > 1) {
            totalS -= hr*3600;
            hStr = `${hr} hours`;
          } else if (hr === 1) {
            totalS -= hr*3600;
            hStr = `${hr} hour`;
          }
        }
        if (totalS > 0) { //check remainder for minutes
          console.log('checking min');
          min = Math.floor(totalS / 60);
          if (min > 1) {
            totalS -= min*60;
            mStr = `${min} minutes`;
          } else if (min === 1) {
              totalS -= min*60;
              mStr = `${min} minute`;
            }
          }
        if (totalS > 0) { // check remainder for seconds
          console.log('checking sec');
          sStr = `${totalS} seconds`;
        }
        if (totalS === 1) {
          sStr = `${totalS} second`;
        }
    } else if (day === 1) { // if it is exactly 1 year
      dStr = `${day} day`;
    }
    else { // <1 day
      if (hr > 1) {
        let iHr = Math.floor(hr); // rounded to lowest whole
        hStr = (iHr === 1) ? mStr = `${iHr} hour` : mStr = `${iHr} hours`; // depending on if the rounded down value is 1 or not
        totalS -= iHr*60*60 // subtract total days in seconds from total seconds
        if (totalS >= 0) { //check remainder for minutes
          console.log('checking min');
          min = Math.floor(totalS / 60);
          if (min > 1) {
            totalS -= min*60;
            mStr = `${min} minutes`
          } else if (min === 1) {
              totalS -= min*60;
              mStr = `${min} minute`
            }
          }
        if (totalS > 0) { // check remainder for seconds
          console.log('checking sec');
          sStr = `${totalS} seconds`;
        }
        if (totalS === 1) {
          sStr = `${totalS} second`;
        }
      } else if (hr === 1) { // if it is exactly 1 year
        hStr = `${hr} hour`;
      }
      else { // <1 hr
        if (min > 1) {
          let iMin = Math.floor(min); // rounded to lowest whole
          mStr = (iMin === 1) ? mStr = `${iMin} minute` : mStr = `${iMin} minutes`; // depending on if the rounded down value is 1 or not
          totalS -= iMin*60 // subtract total days in seconds from total seconds
          if (totalS > 1) { // check remainder for seconds
            console.log('checking sec');
            sStr = `${totalS} seconds`;
          }
          if (totalS === 1) {
            sStr = `${totalS} second`;
          }
        } else if (min === 1) { // if it is exactly 1 year
          mStr = `${min} minute`;
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

  let strArr = [yStr,dStr,hStr,mStr,sStr];
  let finalArr = [];
  strArr.forEach((string)=> { // pushes non empty strings for next function
    if (string !== '') {
      finalArr.push(string);
    }
  });

  // let min = seconds / 60;
  // let hr = min / 60;
  // let day = hr / 24;
  // let yr = day / 365;
  return finalArr.join(', ').replace(/, ([^,]*)$/, ' and $1'); // regex replacing the last comma separated element with and instead of ', ';
}


// best practices
 // note this solution uses a key value table
 //it works by iterating through the keys and subtracting the value from the total seconds then sequentially traveling down the keys in order to continuously generate string elements for the final array
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
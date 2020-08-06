// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(value1, value2) {
    // YOUR CODE GOES BELOW HERE //
    let minToMax = [];
    let maxToMin = [];
    // If the first argument input is less than the second, then count up.
    if (value1 < value2) {
    // counting up, i.e.: 1 - 26
        for (let i = value1; i <= value2; i++) {
            minToMax.push(i);
    // Pushing range values to minToMax Arr with a for loop,
        // starting at value1 and ending at value2
        }
        return minToMax;
    }
    // If the first argument input is greater than the second, then count down.
    else if (value1 > value2) {
    // counting down, i.e.: 26 - 1
        for (let i = value1; i >= value2; i--) {
            maxToMin.push(i);
    // Pushing range values to maxToMin Arr with a reversed for loop,
        // starting at value1 and ending at value2,
            // but decreaasing the integer value by 1 every iteration
        }
        return maxToMin;
    // Both of the return statements must be made *outside* of the For-Loops,
        // else the loop will stop after only one iteration,
            // thus failing to push all range values into the target Array.
    }
    // YOUR CODE GOES ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
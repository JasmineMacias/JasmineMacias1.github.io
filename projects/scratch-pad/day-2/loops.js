// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  var printArrayValues = Object.values(array);
  
  for (var key in array) {
    printArrayValues.push(array[key]);
  }
  
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  var printArrayValuesInReverse = Object.values(array);
  
  for (var key in array) {
    printArrayValuesInReverse.push(array[key]);
  }
  
  for (var i = printArrayValuesInReverse.length - 1; i >= 0; i--){
    console.log(printArrayValuesInReverse[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var newArrayOfObjectKeys = Object.keys(object);
  
  for (var key in object) {
    newArrayOfObjectKeys.push(object[key]);
  }
  
  for (var i = 0; i < newArrayOfObjectKeys.length; i++){
    console.log(newArrayOfObjectKeys[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var array = [];
  
  for (var key in object) {
    array.push(object[key]);
  }
  
  return array;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
   var newArrayOfObjectValues = Object.values(object);
  
  for (var key in object) {
    newArrayOfObjectValues.push(object[key]);
  }
  
  for (var i = 0; i < newArrayOfObjectValues.length; i++){
    console.log(newArrayOfObjectValues[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var size = 0, key;
    for (key in object) {
        if (object.hasOwnProperty(key)) size++;
    }
    return size;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var newArrayOfObjectValues = Object.values(object);
  
  for (var key in object) {
    newArrayOfObjectValues.push(object[key]);
  }
  
  for (var i = newArrayOfObjectValues.length - 1; i >= 0; i--){
    console.log(newArrayOfObjectValues[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

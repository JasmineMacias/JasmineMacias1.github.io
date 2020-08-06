//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var stringArr = [];
    
    for (var key in object) { 
        if (typeof object[key] === 'string') { 
            stringArr.push(object[key]); 
        }
    }
        return stringArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    var result1 = 'array';
    var result2 = 'object';
    return Array.isArray(collection) ? result1 : result2;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var firstLetter = string.toUpperCase().split('', 1);
    var remainingLetters = string.toLowerCase().substring(1, string.length);
    return firstLetter + remainingLetters;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitArr = string.split(' ');
    var capArr = [];
    for(var i = 0; i < splitArr.length; i++) {
      capArr.push(splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1));
    }
    return capArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    for (var key in object) {
        
        let name = object['name'];
        let firstLet = name.charAt(0).toUpperCase(); 
        let split = name.slice(1);
        let firstName = firstLet + split;
        let message = 'Welcome ' + firstName + '!';
    
        return message; // returns message 'Welcome <Name>!'
    } 
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    const name = object.name[0].toUpperCase() + object.name.slice(1);
    const type = object.species[0].toUpperCase() + object.species.slice(1);
    return name + ' is a ' + type;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const testObj = { 
        a: true, 
        noises: ['yadda', 'yadda', 'blah', 'blah']
    }; 
function maybeNoises(object) {
    return Array.isArray(object.noises) && object.noises.length > 0 ? object.noises.join(' ') : 'there are no noises';
}

maybeNoises(testObj); 
// returns yadda yadda blah blah
 
// returns there are no noises when noises Array removed from testObj


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
   for (var i = 0; i < string.length; i++) {
        // The For-Loop loops forward over the entire length of the input string, 
        if (string.includes(word)) {
            // while the If statement searches all of the values to see if the input word is included. 
            return true;
                // Fxn returns boolean true if the word does exist;
        } else {
            return false;
                // otherwise, false is returned.
                }
        
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
    for(var i = 0; i < object.friends.length; i++) {
      if(name === object.friends[i]) {
        return true;  
      }
    }    
  }  
 return false;   
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i = 0; i < nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}




//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    if (array.length < 1) { 
        return object;
    } else { 
        for (let i = 0; i <= array.length; i++) { 
            if (object[array[i]] === object[array[i]]) { 
                delete object[array[i]];
            }
        }
        return object;
    }
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var array1 = ['jasmine', 'jackie', 'ryan', 'jasmine', 'jackie', 'ryan'];
function dedup(array) {
    
    return array.filter((value, index) => array.indexOf(value) === index);
}
console.log(dedup(array1));
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
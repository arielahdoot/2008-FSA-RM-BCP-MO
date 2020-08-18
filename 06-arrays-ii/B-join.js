/* 
.join concatenates the elements of an array into a string; the original array is not changed 
*/

let names = ['Paul', 'George', 'John', 'Ringo'];

let joinedString = names.join();

console.log(typeof joinedString);
console.log(joinedString);
console.log(names);

/*
Notes:
--------

*/

//----------------------------------
// JOIN PART 2 - Add a separator
//----------------------------------

// you can add a separator that will be included in between each element in the created string

// if you don't provide a separator, it will be chosen as "," by default

// let names = ['Paul', 'George', 'John', 'Ringo'];

// let joinedString = names.join(' and '); // add the separator ‘ and ’

// console.log(joinedString);

/*
Notes:
--------

*/

//----------------------------------
// SPLIT - The opposite of join
//----------------------------------

/*
.split divides a string based on a passed-in separator, and stores all of the divisions in an array
*/

// let stringOfNames = 'Paul&George&John&Ringo'

// let splitDefault = stringOfNames.split();
// let splitByAmp = stringOfNames.split('&');

// // will just return an array containing the string if you don't included a separator
// console.log(splitDefault);

// console.log(splitByAmp);
// passing in functions into functions

/* we know we can pass strings, or any value, into a function */

// function logsAType(value) {
//   console.log(typeof value);
// }

// logsAType('happy string');

/*
Notes:
------

*/

// ------------------------------
// PASSING FUNCTIONS INTO FUNCTIONS
// ------------------------------

/* if functions are like any other value, we can pass functions into other functions, too */

/* functions that take a function or return a function are called "higher-order functions" */

/* functions that are passed into other functions are called callback functions */

// function logsAType(value) {
//   console.log(typeof value);
// }

// function happyFunction() {
//   console.log('I am happy!');
// }

// logsAType(happyFunction);

/*
Notes:
------

*/

// ------------------------------
// CALLING FUNCTION ARGUMENTS WITHIN FUNCTIONS
// ------------------------------

/* if we want happyFunction to run, we have to call it */

// function callsAFunction(anotherFunction) {
//   anotherFunction(); // invoking this time
// }

// function happyFunction() {
//   console.log('I am happy!');
// }

// callsAFunction(happyFunction);

/*
Notes:
------

*/

// ------------------------------
// EXAMPLE ONE
// ------------------------------

// function saysHi(name) {
//   console.log('Hi', name);
// }

// function saysBye(name) {
//   console.log('Bye', name);
// }

// function callsWithName(name, callback) {
//   callback(name);
// }

// callsWithName('Sadie', saysHi);
// callsWithName('Sadie', saysBye); 

/*
Notes:
------

*/

// ------------------------------
// EXAMPLE TWO
// ------------------------------

function addWorld(string) {
// string = 'hello';
// return 'hello world';
  return string + ' world';
}

function callsWithHello(func) {
// return addWorld('hello');
  let callbackResult = func('hello')
  return callbackResult;
}

let result = callsWithHello(addWorld);
console.log(result);

/*
Notes:
------

*/
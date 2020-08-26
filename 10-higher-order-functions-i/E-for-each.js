// .forEach 

/* RECALL: a function passed into another function is often called a callback */

/* some built-in JS features use callbacks */

/* .forEach is an array method; it accepts a callback as its only argument */

/* .forEach calls the callback for each element in the array */

/* when .forEach calls the callback, it passes the current element as the first argument of the callback */

// ------------------------------
// .forEach EXAMPLE 1
// ------------------------------

// let bridges = ['Brooklyn', 'Golden Gate', 'London'];

// function logUpperCase(string) {
//   console.log(string.toUpperCase());
// }

// bridges.forEach(logUpperCase);

/* equivalent to:
-----------------
for(let i = 0; i < bridges.length; i++){
  logUpperCase(bridges[i]);
}
*/

/*
Notes:
------

*/

// ------------------------------
// .forEach EXAMPLE 2
// ------------------------------

/* the callback passed into forEach also takes an optional second argument. forEach passes the current index of the element as the second argument. */

// let bridges = ['Brooklyn', 'Golden Gate', 'London'];

// function logWithIdx(string, idx) {
//   console.log(string, 'is at index', idx);
// }

// bridges.forEach(logWithIdx);

/* equivalent to:
-----------------
for(let i = 0; i < bridges.length; i++){
  logWithIdx(bridges[i], i);
}
*/

/*
Notes:
------

*/

// ------------------------------
// .forEach EXAMPLE 3 - Anonymous Function
// ------------------------------

/* you can also use .forEach with an anonymous function */

let bridges = ['Brooklyn', 'Golden Gate', 'London'];

// function logWithIdx(string, idx) {
//   console.log(string, 'is at index', idx);
// }

// I am replacing the function logWithIdx that is passed into the .forEach call with an anonymous function that does the exact same thing, to show that you can use anonymous functions with .forEach as well

bridges.forEach(function (string, idx){
  console.log(string, 'is at index', idx);
});
/* equivalent to:
-----------------
for(let i = 0; i < bridges.length; i++){
  logWithIdx(bridges[i], i);
}
*/

/*
Notes:
------

*/
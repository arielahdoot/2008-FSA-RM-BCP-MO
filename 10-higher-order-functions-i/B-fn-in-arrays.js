// functions in arrays

/* we know we can push strings, or any value into arrays */

// let amazingArray = [];

// let happyString = 'happy';

// amazingArray.push(happyString);
// amazingArray.push(happyString);
// amazingArray.push(happyString);

// console.log(amazingArray);

// ------------------------------
// PUSHING FUNCTIONS INTO ARRAYS
// ------------------------------

/* functions aren't special. we can push them into an array, too! */

// let amazingArray = [];

// function happyFunction() {
//   console.log('I am happy!');
// }

// amazingArray.push(happyFunction);
// amazingArray.push(happyFunction);
// amazingArray.push(happyFunction);

// console.log(amazingArray);

/* When you print out only a function's name without invoking it, the only thing that will be logged is:
"[Function: name_of_function]"
*/

/*
Notes:
------
*/

// ------------------------------
// LOOPING OVER ARRAYS THAT CONTAIN FUNCTIONS
// ------------------------------

/* how do we call all the functions in the array? how have we always looped through an array of values? */

function happyFunction() {
  console.log('I am happy!');
}

let amazingArray = [happyFunction, happyFunction, happyFunction];

for (let i = 0; i < amazingArray.length; i++) {
  let element = amazingArray[i]; // each element is a function!
  element();// we invoke the function the same as always, with parentheses
}

/*
Notes:
------
*/
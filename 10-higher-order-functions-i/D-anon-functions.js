function sayToAll(names, sayWithNameFunc) {
  for(let i = 0; i < names.length; i++) {
    sayWithNameFunc(names[i]);
  }
}

let group = ["Jane", "Jill", "Pip", "Mike"];

function sayHelloWithName(name) {
  console.log("Hello, " + name + "!");
}

sayToAll(group, sayHelloWithName);

/*
Notes:
------

*/

// ------------------------------
// PASSING FUNCTIONS INTO FUNCTIONS
// ------------------------------

/* we can pass anonymous functions into another function, too */

// An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.

// A common use for anonymous functions is as arguments to other functions. 

// function sayToAll(names, sayWithNameFunc) {
//   for(let i = 0; i < names.length; i++) {
//     sayWithNameFunc(names[i]);
//   }
// }

// let group = ["Jane", "Jill", "Pip", "Mike"];

// sayToAll(group, function (name) {
//   console.log("Bye, " + name + "!");
// });

/*
Notes:
------

*/

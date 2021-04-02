// Day 4 Functions; Scope, Hoisting; and Literals

//Literals
// They represent values  in JS that have been hardcoded()

let butlerMascot = 'BullDog';
let myAge = 28; // this value is hardcoded
let arr = [] // this value is not hardcoded, has been declared(given a box)

// Hoisting
/*
- General way of thinking about how code creation and execution works in JS.
- JS puts [var]iable declarations and function declarations into memory during compile phase of the code. This makes it feel that those are "on top" or loaded first.
*/

console.log(myName)
// variable declaration = variable value
var myName = "Paul" //let or const are not hoisted, only functions and var[iables]

// Function
// calling it by the name of the function then followed by ( )

//Example:
sayHello();
function sayHello() {
    console.log(`This is a function declaration`)
}

let func = function(){
    console.log("This is a function expression")
}

func()

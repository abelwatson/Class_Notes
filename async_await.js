// Asynchronous JS Functions
/*
    - async returns a Promise
    - await makes a function wait for a Promise
*/

// function standardFunction() { //function declaration
//     console.log("This is a standard function")
// };

// standardFunction();

// async function asyncFunction() {
//     console.log("This returns a Promise");
// }

// asyncFunction();

// async function asyncFunction() {
//     return Promise.reject("This is resolved");
// };

// async function asyncAction() {
//     setTimeout(() => {
//         console.log(`Async finally hit you!`)
//     }, 3000);
// };

// asyncAction();

// await in API folder...

// Promise 
/*
Commit to something
    - completed -> resolved
    - rejected
*/

// let p = new Promise((resolve, reject) => {
//     // Promise object with one function with resolve and reject parameters
//     let a = 1 + 2;
//     if (a === 2) {
//         resolve(`Promise successful and Resolved`);
//     } else {
//         reject(`Promise rejected...`);
//     }
// });

// p.then((message) => {
//     //anything inside .then is a resolve. Takes a fx with a single parameter
//     console.log(`this is the then(). ${message}`);
// }).catch((message) => {
//     //anything inside .catch is a rejected state
//     console.log(`This is the .catch() ${message}`);
// });

// Try, Catch, Throw and Finally
// try/catch only handles runtime errors

// try {
//     //tests a block of code
//     console.log(`Start of the try`)
// } catch(err) {
//     // handles the error
//     console.log(`Error has occurred` + err)
// } finally {
//     // excludes the code after try/catch regardless of the result
//     console.log(`Finally ALWAYS runs`)
// }

// let json = `{"age": 30}`

// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name")
//     }
// } catch(e) {
//     console.log(`JSON Error: ${e}`) //e.name or e.message for specifity
// }

function upperCase(name) {
    if (typeof name !== "string") {
        throw new TypeError("Name must be a string")
    }
    return name.toUpperCase();
}

// Quick function recap and how to "return" differs from "console.log"

// function addNums(x, y) {
//     let sum = x + y;
//     console.log(sum);
//     return sum;
// }

// let results = addNums(6, 7);
// let results2 = addNums(18, 30);

// document.querySelector(".results").innerText = results
// document.querySelector(".results2").innerText = results2
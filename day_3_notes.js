//Quick String Question:
console.log(`This can interpolate as well as print any symbol ' " () [] {}`)
console.log('This will print like a string but our symbols need help can "quote')

// Conditional Statements - if, if else/else if, switch, ternary

// IF STATEMENTS
// Checks for a boolean value, if something is true it is known is truthy(a truthy statement), or falsy.
// Truthy - if condition is or can be true
// Falsy - if condition is or can be false
// Some falsy expressions are: null, NaN(not a number), 0, an empty string(" "), and undefined

// If a condition is true, the JS will execute(perform) the code back
// If check one, singular, condition

// Declare a variable:
let isOpen = true;

// The condition to check is held in our (  )
if (isOpen === true) {
    // The code we perform if the condition is met is held in  {  }
    console.log(`The door is open.`);
};

// Same as above, statement checks if the value in ( ) is true
if (isOpen) {
    console.log(`The door is open.`);
};

// Can test false values
if (isOpen === false){
    console.log(`The door is shut.`);
};

// IF ELSE
// If else is used to check a condition, but run a code block for either the met condition or a separate code block if it doesn't meet the condition

let isOpen = false;

if (isOpen === true) {
    console.log(`The door is open.`);
} else {
    console.log(`Go home, they are closed.`);
};

let temp = 60;

if (temp >= 65) {
    console.log(`Wow! What a nice day!`);
} else {
    console.log(`I need a sweater...`);
};

// ELSE IF
// Else is used to allow us to check more than two conditions
// Examples: Day 2 Challenge, Fizz Buzz Challenge

let temp = 15;

if (temp >= 80){
    console.log(`I know people are wearing shorts.`);
} else if (temp >= 65){
    console.log(`This is t-shirt weather...`);
} else if (temp >= 50){
    console.log(`You're going to need a sweater.`);
} else {
    console.log(`I am not leaving my house and you can not make me!`);
};



let userName = "myUserName";
let password = "myPassword";

if (userName === "myUserName" && password === "myPassword"){
    console.log(`Welcome Back ${userName}. You're logged in!`);
} else if (userName === "myUserName"){
    console.log(`You're username is correct, but your password is incorrect.`);
} else if (password === "myPassword"){
    console.log(`You're password is correct, but your username is incorrect.`)
} else {
    console.log(`You're not in our system, would you like to sign up?`);
};


// SWITCH STATEMENTS
// Execute a block of code depending on the "cases"; condition met? Check against cases
// use case (condition): - starts the code block
// break - to end the code
// Example: Fizz Buzz
// Default - code to be ran if no cases are met, good practice to have

let favColor = `blue`;

switch (favColor) {
    case `green`:
        console.log(`Green like the grass.`);
        break;
    case `yellow`: 
        console.log(`Yellow, like the sun.`);
        break;
    case `red`:
        console.log(`Red like a rose.`);
        break;
    default:
        console.log(`${favColor} is beautiful too!`)
};

let doYouLikePizza = `yes`;

switch (doYouLikePizza){
    case `yes`:
    case `yeah`:
    case `duh`:
        console.log(`Me too! I love pizza :)`);
        break;
    case `no`:
    case `nope`:
    case `nah`:
        console.log(`I will order something else for dinner.`);
        break;
    default:
        console.log(`I cannot tell if that is a yes or no.`);
};

// TERNARY STATEMENTS
// Concise way to check two(or more) conditions using the syntax of ? and :
// Structure
// (condition) ? (codeToRunIfTrue/truthy) : (codeToRunIfTrue/Truthy)

let temp = 70;

//ternary
(temp >= 75) ? console.log(`Indiana summer temps`) : console.log(`Indiana Spring Temps`);

//Instead of
if (temp > 75){
    console.log(`Summer`);
} else {
    console.log(`Spring`);
};

let num = 16;

(num > 0) ? console.log(`Positive Number`) : 
    (num < 0) ? console.log(`Negative Number`) :
    console.log(`Number is Neutral`);

// LOOPS
// for loop - a quick and easy way to iterate or "loop" over something, to do it repeatedly
// Infinite loops are possible(best to avoid): crtl + c, or close VSC
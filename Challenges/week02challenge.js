//* Challenge:
//* Create a variable named FB that takes numbers
//* Write a conditional that: 
//* Prints out "Fizz" if the number is divisible by 3
//* Prints out "Buzz" if the number is divisible by 5
//* Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//* Bronze: Write as a If else
//* Silver: Write as a Switch,
//* Gold: Write as a Ternary

// Google? Switch JS, switch structure JS

//Bronze:
// var fB = 11

// if (fB % 15 == 0){
//     return console.log('Fizz Buzz');
// } else if (fB % 3 == 0){
//     return console.log('Fizz');
// }  else if (fB % 5 == 0){
//     return console.log('Buzz');
// } else {
//     console.log (`${fB} is not divisible by either 5 or 3.`)
// }
//Example:
// var FB = 10

// if(FB % 3 == 0 && FB % 5 == 0){
//     console.log('Fizz Buzz');
// } else if(FB % 3 == 0){
//     console.log('Fizz');
// } else if(FB % 5 == 0){
//     console.log('Buzz');
// } else{
//     console.log(`Your number, ${FB}, is divisible by neither 3 nor 5.`);
// }

// //Silver:

// let fB = 23;
// switch(true){
//     case (fB % 15 === 0):
//         console.log(`Fizz Buzz`);
//         break;
//     case (fB % 3 === 0):
//         console.log(`Fizz`);
//         break;
//     case (fB % 5 === 0):
//         console.log(`Buzz`);
//         break;
//     default:
//         console.log(`${fB} is not divisible by 3 or 5.`)
// }

//Gold:

// let fB = 8;

// (fB % 15 === 0) ? console.log(`Fizz Buzz`): 
// (fB % 3 === 0) ? console.log(`Fizz`) : 
// (fB % 5 === 0) ? console.log(`Buzz`) : 
// console.log(`${fB} is not divisible by 3 or 5.`);


// Week 2 Day 4 Challenge

// Bronze:
/* Create for loop that runs until it has reached the end of the alphabet array, and prints each letter to the console. */

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// //   start var    stop parameter  increment var
// for (let i = 0; i < alphabet.length; i++){
//     console.log(alphabet[i]); // access the alphabet array by index of i
// };


// Silver
/* Write a conditional nested inside of for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.lo letter. If index is odd, console.log "index is an odd number" */

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// for (let i = 0; i < alphabet.length; i++) { //letter is an index of 
//     if (i % 2 === 0) {
//         console.log(alphabet[i]);6
//     } else {
//         console.log(`Index is a odd number`);
//     }
// };
// for (let i = 0){
    //(i % 2 === 0) ? (console.log(alphabet[i]) : console.log(`index is an odd number`))
//}

/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/


let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

let arr = [];
let vowels = ['A', 'E', 'I', 'U', 'O']
for (character in fellowshipOfTheRing.members) {
    if (vowels.includes(character[0])) {
    } else {
        arr.push(character)
    }
};
console.log(arr)
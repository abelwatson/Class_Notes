// Challenge No. 1
// Who's name is longer?
/* Bronze

Write two variables. One will store your name and another will store a friend's name. Find our what property you can use to check how long the names are. Console log how many letters are in each name.
*/

// var myName = "Abel";
// var myFriendsName = "Friend";
// console.log(myName.length);
// console.log(myFriendsName.length);

// Gold
// In the console log include how many letter differences there are between the names.
//Example: Adams name is shorter than mine by four letters.

// var myName = "Abel";
// var myFriendsName = "Peighton";
// var myNameLength = myName.length;
// var myFriendsNameLength = myFriendsName.length;
// console.log('The difference between my friends name and mine are:', myNameLength - myFriendsNameLength)

// let (difference = myName.length - myFriendsName.length);

// if (difference === 0) {
//     console.log(`The names are the same.`)
// } else if (difference > 0) {
//     console.log(`My name ${myName}, is ${difference} character(s) longer.`)
// } else if (difference < 0) {
//     console.log(`My friend ${myFriendsName}\'s name is ${difference} character(s) longer.`)
// };

// if (myName.length > myFriendsName.length) {
//     let letters = myName.length - myFriendsName.length
//     console.log(` ${myFriendsName}'s name is shorter than mine by ${letters} letters.`)
// }  else if (myName.length < myFriendsName.length) {
//     console.log(`${myFriendsName}'s is longer than mine by ${letters} letters.`)
// } else {
//     console.log(`Our names are the same length!`)
// }

// Platinum Challenge Supah Sppppicy Mode!
// Declare a variable of age and give it whatever integer you'd like. Create a conditional that checks the following:
// If you're 17 or younger, console.log 'You're too young to do anything, stay at your parent's
// If you're 18, console.log 'You can vote!'
// If you're 21, console.log 'Please, just not one of those White Claw things!'
// If the age is at least 25, console.log 'Your insurance premium just went down'

let age = 14

if (age <= 12) {
    console.log("You cant be on Facebook!")
} else if (age <= 15) {
    console.log("Experts say you shouldnt have a phone...")
} else if (age >= 30) {
    console.log("After age 30, the brain shrinks a quarter of a percent in mass each year.")
}
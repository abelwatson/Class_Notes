//var vs let vs const
//Block scoped and can be reassigned

// let name;
// name = 'Paul'
// console.log(name)
// name = 'Jon'
// console.log(name)

//const cannot be reassigned

// const number = 15;
// console.log(number);
// const number = 19;
// console.log(number)

// var x = 10;
// console.log(x)

//var is function scoped and declaration loads up before the file is read
// let must be declared first before being called; else error occurs

// console.log(y)
// let y = 15 //error!

// console.log(3 == "3")

let myNum = 5;
let myStr = '5';

console.log(typeof myNum) // typeof tells you the data type
console.log(typeof myStr)

console.log(myStr + myNum) // concatenates int with the string and turns it into a string

// Git
// Version control system designed to keep chronological timeline of all of your code changes.
//To traverse file system in terminal:
//cd name_of_folder --> moves you down
//cs.. --> moves you up
//ls --> lists items inside the existing folder
//pwd --> specifies directory path you're currently in

//to initiate a git repository:
// git init

//Staging files for a commit:
//git add <file_name> or git add .
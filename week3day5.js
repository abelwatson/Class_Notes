// Arrays and Objects

// Array
/*
High-level, list-like object used to be traversed and mutated.
    - uses integers as element index (starting at zero)
    - can be accessed by bracket notation (index) or dot notation(method).
    - arrays are zero indexed
        - first object at zero (0)
        - last object at array (object.length - 1)
*/

// Create an array

let esp = ["latte", "cappuccino", "flat white", "caramel macchiato"];

console.log(esp[2]); // logs 3 element "flat white"
console.log(esp[0]); // logs first element "latte"
console.log(esp[esp.length -1]); // logs the last element "caramel macchiato"

// Array Methods

console.log(esp.length); // returns length of an array

esp.push("americano"); // appends element to the end of an array
console.log(esp);

esp.splice(0, 1, "cortado") // index to remove, how many to remove, what to replace with

let bReturn = esp.pop(); // removes last index of an array, "americano" and return it for a brief moment
console.log(bReturn); // shows .pop() holding onto that item
console.log(esp)

esp.shift(); // removes start element of an array
console.log(esp);

esp.unshift("latte"); // adds elements to array start and returns array length

console.log(esp.indexOf("flat white")); // searches an array for an index of element. Can add second param to select start index

console.log(esp.includes("latte")); // determines whether array has specific element. Can add second param to select start index. Returns true/false

// Advanced Array Manipulations

let german = ["BMW" , "Mercedes" , "Audi" , "Porsche" , "VW"];

for (cars of german) {
    console.log(cars);
};

// Array forEach Methods

german.forEach(car => console.log(car));
// same as   (func(car) { console.log(car)})

// array.map() -> transforms elements in original array by callback function and returns a new, modified array.

let germanUpperCase = german.map(car => car.toUpperCase());
console.log(germanUpperCase);

//array.filter() -> creates a new array with elements that pass the test in a given function

console.log(german.filter(car => car.startsWith("A"))); //
console.log(german.filter(car => car.startsWith("A") || car.startsWith("B"))); // using or || to search more than one letter

// Objects
/* Containers for values in a JSON format(JavaScript Object Notation)
    - exists as a string
    - has properties and methods
    - .property
    - .method()
    - associative arrays (each property is associated with a string value)
*/

// define JS object with an object literal

let car = {
    //key : value pair (properties) that are comma separated
    make: "Porsche",
    model: "911",
    country: "Germany",
    driver: "Walton Rohl",
    association: {
        firstName: "Jeff",
        lastName: "Adams",
    }
};

// Accessing Object Values

console.log(car.make); // access using key
console.log(car["model"]); // access using object key
let returnKeys = Object.keys(car); // returns keys in an object
console.log(returnKeys);
console.table(car);
console.log(car);

// Object Property Reassignment

car.make = "Maserati";
car["model"] = "GrandTurismo S";
console.table(car);

// Object Constructor

let client = new Object; // creates an empty object
console.log(client);

client.firstName = "Paul";
client.lastName = "Niemczyke";
client.birthYear = 1998;
console.log(client);

let manager = {
    firstName: "Brad",
    lastName: "Titus",
    birthYear: 1990,
    //first way requires parameter of birthYear from outside
    // setAge: function(birthYear) {
    //     return 2021 - birthYear
    // }
    //second way takes property from this.birthYear
    // setAge: function() {
    //     return 2021 - this.birthYear
    // }
    setAge: function() {
        this.age = 2021 - this.birthYear // creates new age property with value of function calculation once it has been called.
    }
}

// console.log(manager.setAge(1990));
// console.log(manager.setAge());
console.log(this); // is a global object
manager.setAge();
console.log(manager.age);


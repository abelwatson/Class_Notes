//DOM Document Object Model
/*
A representation of a window.document object that comprises everything that we see in the browser (and things we don't such as <head> tag)
    - DOM Node interface has subclasses of:
        - Document
        - Element
        - DocumentFragment
 */

// // creates an HTML element
// let h1 = document.createElement("h1");
// // .innerText is a property that injects text
// h1.innerText = "Welcome to Document Object Model";
// // references style sheet and it's color property to assign it a value
// h1.style.color = "whitesmoke";
// h1.style.fontFamily = "sans-serif";
// // appends the Node
// document.body.appendChild(h1);

// document.QuerySelector()

let h3 = document.getElementById("id-method");
h3.innerText = ".getElementById"
h3.style.color = "white"

let p = document.getElementById("get-id");
p.innerText = "Method used to grab the first element with a specified id"

let myList = document.getElementsByClassName("our-list");
// ul counts as [0] "first element in list"
// [0] changes both all elements in list
myList[0].style.fontFamily = "sans-serif"
// [1] changes the first elements in list
myList[1].style.color = "blue"
// [2] etc...
myList[2].style.color = "red"

//querySelector() find the first matching element 
//("element tag")(".class tags")("#id tags")
let qSelect = document.querySelector("#q-select");
qSelect.innerText = "Query Selector grabs the first matching selector"

// .addEventListener("event", callback_function)

// "event" = what will happen
// callback_function = what will happen when it occurs

let myBtn = document.querySelector(".submit-btn");
myBtn.addEventListener("click", () => {console.log("Don't touch me!")})
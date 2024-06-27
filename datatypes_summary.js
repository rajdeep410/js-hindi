// premitive datatype

//types: string, number,boolean,null,undefind,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 
// console.log(id === anotherId);

// const bigNumber = 123456787654321n

// Non premitive/reference datatype

// Array,object,function

const heros = ["shaktiman", "naagraj","mighty raju"]
let myObj = {
    name: "rajdeep",
    age: 21,
}

const myFunction = function(){

    console.log("Hello World");
}

console.log(typeof scoreValue);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// type of memory in javascript

// stack(Piemitive), Heap(Non Primivitive)

let myYoutubeName = "rajdeepkumar.com"

let anotherName = myYoutubeName
anotherName = "chaiauercode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"

}

let = userTwo = userOne

userTwo.email = "rajdeep@google.com"
console.log(userOne.email);
console.log(userTwo.email);
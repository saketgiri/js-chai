// Primitive types
// number, string, boolean, null, undefined, symbol, bigInt

// Reference type
// Array, object, function

let x = Symbol(1);
let y = Symbol(1);
// console.log(x === y);

const myArray = ['Shaktimaan', 'Dhruv', 'Doga'];
const myObj = {
    name: "Saket",
    age: "44"
}
const myFunction = function(){
    console.log("myFunction")
}

// ######################################################################################################
let myName = "Saket";
let anotherName = myName;
console.log(myName == anotherName);
console.log(myName === anotherName);
myName = "Giri";
console.log(myName == anotherName);

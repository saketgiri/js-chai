// for (var index = 0; index < 10; index++){
//     console.log(index);
// }

// const arr = [1, 2, "aa", 3 , 4, 5];

// for (const num of arr){
//     console.log(num);
// }

// const greeting = "Hi, Saket";
// for (const letter of greeting){
//     console.log(letter);
// }

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("De", "Germany");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// const myObj = {
//     1:2,
//     2:3,
//     4:5
// }

// for (const element of myObj) {
//     console.log(element);
// }

const myObject = {
    js: "javascript",
    cpp: "cplusplus"
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
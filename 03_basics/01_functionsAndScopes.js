function addTwoNumbers(number1, number2) {
    return number1 + number2
}

function UndefinedCheck(names){
    if (names === undefined){
        console.log("no parameter sent");
        return;
    } else {
        console.log(names);
    }
}
// let ans = UndefinedCheck("Saket");
// console.log(ans);
// ans = UndefinedCheck();
// console.log(ans);
// console.log(!undefined)

function arrayChecker(anyArray){
    anyArray[1] = 10;
}
let myArray = [1, 2, 3, 4, 5]
arrayChecker(myArray);
// console.log(myArray); 
let myArray1 = [1, 2, 4];
let myArray2 = [0,9];
myArray1[0] = -1;
// console.log(myArray1);
myArray1 = myArray2;
// console.log(myArray1);

let c = 100;
if (true){
    let c = 1;
}
// console.log(c);

// function one(){
//     const userName = "saket";

//     function two(){
//         const website = "youtube";
//         console.log(userName);
//     }
//     // console.log(website);
//     two()
// }
// one()

console.log(addTwo(7));
function addTwo(num){
    return num + 2;
}
const addOne = function(num){
    return num + 1;
}
console.log(addOne(7));

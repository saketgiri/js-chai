let name = "SaketwaRe";
let newObj = {
    name: "Saket",
    age: 44,
    myFunc: function(){
        console.log(this);
        return `${this.name} is aged ${this.age} years`;
    }
}
// console.log(newObj);
// console.log(newObj['myFunc']);
// console.log(newObj['myFunc']());
// console.log(this);

// function check(){
//     let username = "Saket";
//     console.log(typeof this);
//     console.log(this);
//     console.log(this.username);
// }
// check();

// const chai = function(){
//     let userName = "Saket";
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let userName = "Saket";
//     console.log(this.username);
// }

// const chai = () => {
//     let userName = "Saket";
//     console.log(this);
// }
// chai();

const chai = (num1, num2) => (num1 + num2)
console.log(chai(3, 5));

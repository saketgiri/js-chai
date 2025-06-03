// const tinderUser = new Object();
const tinderUser = {};
tinderUser["id"] = "123abc";
tinderUser["name"] = "Sam";
tinderUser['isLoggedIn'] = false;

// console.log(typeof tinderUser1);
// console.log(tinderUser == tinderUser1);

// const regularUser = {
//     email:"bogo@gmaul.com",
//     fullname: {
//         userfullname: {
//             firstName: 'first',
//             lastName: "second"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {obj1, obj2};
// const obj4 = Object.assign(obj1, obj2);
const obj5 = {...obj1, ...obj2};
console.log(obj1);
// console.log(obj4);
// console.log(obj1 == obj4);
// console.log(obj5);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));




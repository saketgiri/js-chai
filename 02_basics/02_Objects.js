//object singleton
// object literal

const JsUser = {
    name: "Saket",
    age: 44,
    location: "Jamshedpur",
    email: "saket@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email)
// console.log(JsUser['isLoggedIn'])
// Object.freeze(JsUser);
JsUser['email'] = "saketware@gmail.com";
// console.log(JsUser);
// console.log(JsUser["email"]);

JsUser.greeting = function() {
    console.log("Hi Saket")
    // return 1;
}
console.log(typeof JsUser.greeting);
console.log(JsUser.greeting);
console.log(`this is ${typeof JsUser['greeting']()}`);
console.log(JsUser['greeting']());

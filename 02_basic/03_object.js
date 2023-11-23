// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Umesh",
    "sir Name": "Patidar",
    [mySym]: "mykey1",

    age: 15 ,
    email: "umesh@google.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser.sir_Name); // ?? Here we can't access sir Name key via . so we must have to use below method
// console.log(JsUser["sir Name"]);

// console.log(JsUser[mySym]); // This is how we access symbol in JS object

JsUser.email = "umesh@chatgpt.com" // how we change the object value in js
JsUser[mySym] = "Mykey2"
// console.log(JsUser["email"]);
// Object.freeze(JsUser)

// JsUser.email = "umesh@openai.com"
console.log(JsUser[mySym]);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


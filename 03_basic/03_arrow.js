const user = {
    username: "hitesh",
    price: 999,


    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website` );
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()
// function chai() {
//     let username = "hiteshchaudhary"
//     console.log(this.username); // it will only use in const not with function
    
// }

// const chai = function () {

//     let username = "hiteshchaudhary"
//     console.log(this.username);
// }

// =========================================================Arrow function ===========================

const chai = () => {

    let username = "hiteshchaudhary"
    console.log(this);
}
// console.log(this);
// chai()


// () => {}
const addTwo = (num1, num2) => {
    return num1 + num2
}


const addTwo1 = (num1, num2) => {return num1 + num2}
const addTwo2 = (num1, num2) => num1 + num2
const addTwo3 = (num1, num2) => (num1 + num2)
const addTwo4 = (num1, num2) => ({name: "Umesh"}) // we can't use only {} because for return value we must have to use ()
// console.log(addTwo(3, 5));









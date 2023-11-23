


function sayMyName() {
    console.log("U");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("J");
    console.log("I");
}

// sayMyName()


// function addTwoNumber(number1, number2) {

//     console.log(number1 + number2);
// }

// addTwoNumber(3, null)

// function addTwoNumber(number1, number2) {

//     console.log(number1 + number2);
// }

// const result = addTwoNumber(3, 4)
// console.log(result); 

function addTwoNumber(number1, number2) {

//    let result = number1 + number2
//    return result

   return number1 + number2
}

const result = addTwoNumber(3, 4)

// console.log("Result :", result);


function loginUserMessage(username){
    if (username === undefined && !username)  {
        console.log("Please Enter A Valid Name");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());
// loginUserMessage()

function calculateCartPrice(val1, val2, ...num1) {  // this is call ... rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Umesh",
    prices: 199
}


function handlObject(anyObject) {
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}

// handlObject(user)

// handlObject({
//     username: "sam",
//     price: 399
// })


const newArray = ["kuch",34, 3434, 53, 382.00]

function returnSecondArrray(getArray) {
    return getArray[1]
    
}

console.log(returnSecondArrray(newArray));

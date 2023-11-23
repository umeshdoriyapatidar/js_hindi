//conversion of numbers
let score = "33"

score2 = null
score3 = undefined
score4 = true
score5 = false
score6 = "33as"
score7 = NaN

let valueInNumberscore = Number(score)
let valueInNumberscore2 = Number(score2);
let valueInNumberscore3 = Number(score3)
let valueInNumberscore4 = Number(score4)
let valueInNumberscore5 = Number(score5)
let valueInNumberscore6 = Number(score6)
let valueInNumberscore7 = Number(score7)

// console.log(typeof(valueInNumberscore));
// console.log(valueInNumberscore);
// //output 33

// console.log(typeof(valueInNumberscore2));
// console.log(valueInNumberscore2)
// //output 0      Note: Here it change Null Into 0

// console.log(typeof(valueInNumberscore3));
// console.log(valueInNumberscore3)
// //output NaN    Note: Here it undefined false Into NaN (Not an Number)

// console.log(typeof(valueInNumberscore4));
// console.log(valueInNumberscore4)
// //output 1      Note: Here it change boolean true Into 1

// console.log(typeof(valueInNumberscore5));
// console.log(valueInNumberscore5)
// //output 0      Note: Here it change boolean false Into 0

// console.log(typeof(valueInNumberscore6));
// console.log(valueInNumberscore6)
// //output NaN    Note: Here it change String Into NaN



// console.log(typeof(valueInNumberscore7));
// console.log(valueInNumberscore7)

//// Boolean Conversion

let isLoggedIn = "Hittesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kuchbhi" => true


//// String Conversion 

let number = 33

let nubmertostring = String(number)

// console.log(nubmertostring);
// console.log(typeof nubmertostring);



// ******************************* OPERATION ********************************************************//

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Umesh"
let str2 = "Patidar"

str3 = str1 + str2
// console.log(str3);

// console.log("1"+ 2);
// console.log("1"+ "2");
// console.log(1+ "2");
// console.log("1"+ 2 + 2);
// console.log(1+ 2 + "2");



let gameCounter = 100
++gameCounter  //prefix incremeant
console.log(gameCounter);
gameCounter++  //postfix increamenat
console.log(gameCounter);

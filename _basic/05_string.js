const name = "Hitesh"
const repoCount = 50

console.log(name +" "+repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const gameName = new String("Cricket")

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8, 4)
console.log(newString);

const newString1 = gameName.slice(1, -4)

console.log(newString1)


const newString2 = "     KuchBhilikhde    Bhai"
console.log(newString2);
console.log(newString2.trim())


const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '_'));

console.log(url.includes('hitesh'))

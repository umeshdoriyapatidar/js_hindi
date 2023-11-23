// Array

const myarray = [3, 0 ,1, "Kuch"];

// console.log(myarray);


//Array mehtods

// myarray.push(3)
// console.log(myarray);

// myarray.pop()
// console.log(myarray);

// myarray.unshift(9)

// console.log(myarray);

// myarray.shift()

// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));

const newArray = myarray.join()
// console.log(myarray);
// console.log(newArray);
// console.log(typeof newArray);


// slice and splice

console.log("A : ", myarray);

const  myn1 = myarray.slice(1, 3)

console.log(myn1);

console.log("B : ", myarray);

const myn2 = myarray.splice(1, 3)

console.log(myn2);

console.log("C : ", myarray);
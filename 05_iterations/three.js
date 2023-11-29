// for of  higer order function

// [" ","", ""]
    // [{}, {}, ]
const arr = [1,3,5,5,6,6]
for (const num of arr){
//   console.log(num);
}


const greetings = " Hello World"

for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
}


//Map


const map = new Map()

map.set('IN', 'India')

map.set('us', 'United State')

map.set('Fr', 'France')

// console.log(map);

for (const key of map) {
    // console.log(key);
}


for (const [key, value] of map) {
    // console.log(key, ':-', 'value');
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }




const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift'
}


for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        // console.log(element);
        
    }
}


for (const key in map) {
    // console.log(key);
}



//For Each 

const coding = ["Js", "Ruby", "Cpp", "java", "python"]

coding.forEach( function (item){
    // console.log(item);
})


coding.forEach((item) => {
    // console.log(item);
})



function printMe(item){
    // console.log(item);
}


coding.forEach(printMe)

coding.forEach((item, index, arr) => {
//  console.log(item, index, arr);
});

const  myCoding =[
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },

    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },

]


myCoding.forEach((item) =>{
    console.log(item.languageName);
})
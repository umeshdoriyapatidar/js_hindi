//Destructuring with object

const course = {
    "course_name": "Js in hindi",
     price: "999",
     coursInstructor: "Hitesh"
}


const {coursInstructor} = course
const {coursInstructor: Instructor} = course
console.log(coursInstructor);
console.log(Instructor);

// *** const navbar = ({company}) => {

// }

// navbar(company = "Hitesh")   ***      this protion of code is of React



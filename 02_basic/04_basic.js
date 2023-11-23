//SingleTon

// const tinderUser = new Object() //this is singleton objec
const tinderUser = {} // This one is non-singleton object



tinderUser.id = "1232user1"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstname: "Umesh",
        lastname: "Patidar"
    }
}

// console.log(tinderUser);
// console.log(regularUser["fullName"]["firstname"]);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "e", 5: "f"} //Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {obj1, obj2}


// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));

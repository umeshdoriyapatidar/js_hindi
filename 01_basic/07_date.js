// Dates

let myDate = new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(typeof(myDate));

let createMyDate = new Date(2023, 10, 30)
// console.log(createMyDate.toDateString());

let newDate = new Date(2023,0 ,23, 5, 5, 5)
// console.log(newDate.toLocaleString());

let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toISOString());

let myStamp = Date.now()
// console.log(myStamp);
// console.log(myCreateDate.getTime());
// console.log(myStamp > myCreateDate.getTime());

let nDate = new Date()
// console.log(nDate);
// console.log(nDate.getDate());
// console.log(nDate.getHours());

nDate.toLocaleString('default', {
    day: "numeric",
    weekday: "long"
})
console.log(nDate.toLocaleString('default', {
    timeZone: "IST"
}));
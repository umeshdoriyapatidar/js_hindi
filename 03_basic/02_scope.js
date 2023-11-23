function one() {
    const username = "hitesh"

    function two() {
        
        const website = "youtube"
        // console.log(username);

    }

//    console.log(website);
   two()
}
one()

if (true) {
    const username = "hitesh"

    if (username == "hitesh") {

        const website = " youtube"

        // console.log(username + website);
        
    }

    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++++++++++++Intersting++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(addOne(3)); ## This is called before the function defination it would execute without anyy error

function addOne(num) {
    return num+1
}


// console.log(addTwo(3));  ## It is called before the function defination but it would through and exception or error in JS
const addTwo = function(num) {
    return num + 2
    
}
// console.log(addTwo(3));
// Immediaely Invoked Function Experression (IIFE)


(function chai() {
    //named iife because it has a name chai
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB Connected To ${name}`);
})("Umesh DB");
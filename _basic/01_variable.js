const accountId = 1235424
let accountEmail ="umesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState = "MP"

// accountId = 2;
accountEmail = "Ummes@ggmail.com"
accountPassword = "54321"
accountCity = "Indore"
/*
Preffer Not to use Var because of scope
by default 
*/
if (accountState) {
   accountCity = "Mandsaur"
}
// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
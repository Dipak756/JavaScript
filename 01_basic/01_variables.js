const accountId = 12345
let accountEmail = "dipak@gmail.com"
var accountPass = 99999
accountCity = "Kolkata"
let accountState;

//const can not be changed

accountEmail = "ojha@gmail.com"
accountPass = 67890
accountCity = "Bangaluru"

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity, accountState])

//try not to use var becuase in issues of block scope and functional sc
const accountId =11
let accountEmail="gaurav@gmail.com"
var accountPassword = "1234"
accountCity = "noida"
let accountState;

/*
prefer not to use var 
because of issue in block scope and finction scope
*/
//accountId=22  // not allowed 
accountEmail="abhudat@gmail.com"
accountPassword="4321"
accountStat="delhi"

console.table([accountId,accountEmail,accountPassword,accountState])


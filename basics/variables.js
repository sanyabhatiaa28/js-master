
const accountId=2345   //cant change. cant re assign
let accEmail="sanya@gmail.com"//can re assign
var accPassword="12345" //can reassign
accCity="Jaipur"
let stateac;
/*
prefer not to use var
coz of issue in block scope and fnal scope.
*/
// accountId=2 not allowed as const cant be re updated.
console.log(accountId); 
accEmail="san@gmail.com"
console.log(accEmail);
accPassword="2345"
console.log(accPassword);
accCity="pinkcity"
console.log(accCity);

console.table([accEmail,accPassword,accountId,accCity,stateac])
//console.table([])- directly prints all variables value in table format with index as 0 to any.



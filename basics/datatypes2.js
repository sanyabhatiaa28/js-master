//summary js is dynamically typed language
//division based on how they stored in memory and how they are being accessed

// primitive 
/*
7 types call by value
original data nhi dia jata
copied value as reference di jati
copy me changes hote.
String
Number(be it int decimal nthng like float is here)
Boolean
null
undefined
Symbol(unique bnane k liye)
BigInt
*/
// non primitive
/*
reference type.
memory me direct reference allocate krte h
Array
Objects
Functions
*/
// let user;=> undefined


//symbol declare; they return new unique symbol value. even if 2 have same value
// const id= Symbol('123')
// const id2= Symbol('123')
// console.table([id,id2]);
// console.log(id===id2);
// Summary
// Strings compare by value → "123" === "123" → true
// Symbols are always unique → Symbol("123") !== Symbol("123") → false

// const bignum= 489722883734934n


// const heros=["yey","nay"]
// {
//     name: "sanya",
//     age:22
// }
// let myobj={
//     name:"crush"
//     age:24
// }

//function
// const myfn=function(){
// console.log("hey");

// }

// console.log(typeof ______);
/*
type of value and their result
undefined ka "undefined"
null ka "object"
boolean number string as it is.
fn ka datatype fn hi h obj fn.
baki non primitive ka obj.
symbol ka symbol aata.

*/

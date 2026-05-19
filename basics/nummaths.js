const score=400
const balance= new Number(500)

console.log(score) //400
console.log(balance)//[Number: 500] ye number object hai. isme number ke sare methods hote hai.
//number ke methods: toFixed(),toExponential(),toPrecision() etc etc.

//toFixed() method formats a number using fixed-point notation and returns the result as a string.
// const num=3.14159
// console.log(num.toFixed(2)); //3.14

//toExponential() method returns a string representing the Number object in exponential notation.
// const num=12345
// console.log(num.toExponential(2)); //1.23e+4

//toPrecision() method formats a number to a specified length and returns the result as a string.
// const num=3.14159
// console.log(num.toPrecision(3)); //3.14
// console.log(num.toPrecision(4)); //3.142
// console.log(num.toPrecision(5)); //3.1416

console.log(balance.toString().length); //500 number ko string me convert krdia    aur length nikal liya. 3 aayega as 500 me 3 digits hai.

// Math.abs(-5) //5 absolute value nikalta hai
// Math.round(3.7) //4 round off krta hai
// Math.round(3.2) //3 round off krta hai
// Math.ceil(3.2) //4 ceil method hamesha upar round krta hai
// Math.floor(3.7) //3 floor method hamesha neeche round krta hai
// Math.max(1,2,3,4,5) //5 max value nikalta hai
// Math.min(1,2,3,4,5) //1 min value nikalta hai
// Math.random() //0 se 1 ke beech me random number generate krta hai
// Math.random()*100 //0 se 100 ke beech me random number generate krta hai
// Math.floor(Math.random()*100) //0 se 99 ke beech me random integer generate krta hai        
// Math.random()*10 +1 //1 se 10 ke beech me random number generate krta hai
// Math.floor(Math.random()*10) +1 //1 se 10 ke beech me random integer generate krta hai
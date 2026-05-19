const name="sanya" 
const alsoname=" bhatia"
// const finalname=name+alsoname
// console.log(finalname +30); //outdated
// use `` instead string interpolation modern way
console.log(`my name is ${name} and surname is ${alsoname}`);

//way 2 to declare string
const namee= new String('sa')
//normal one bhi behind the scene object to invoke krrha. yha hm direct use krrhe

//console pe 1st way print krenge to sanya bhatia print krega.
//console pe 2nd way print krenge to ye print krega:
/*
0:"s"
1:"a"
length:2
[[prototype]]:String it contains a lot of methods to work with string. 
charAt(),concat(),indexOf(),endswith() etc etc.
[[PrimitiveValue]]: "sa" */ 

//console.log(namee[1]); //print a as it is on idx1
// console.log(namee.__proto__); //ye string ke sare methods dikhayega. as it is a string object.
// lot of methods are there for string.
//slice me negative index bhi de skte hai.
// const str="sanyabhatiya"
// console.log(str.slice(0,5)); //sanya
// console.log(str.slice(0,-6)); //sanya
// console.log(str.slice(-6)); //bhatia
// console.log(str.slice(-6,-2)); //bhati


//trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
// const str="   hello world   "
// console.log(str.trim()); //hello world


//replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// const str="hello world"
// console.log(str.replace("world","sanya")); //hello sanya
// console.log(str.replace(/o/g,"a")); //hella warld. g means global replace all o with a

//toUpperCase() method converts a string to uppercase letters and returns the new string.
// const str="hello world"
// console.log(str.toUpperCase()); //HELLO WORLD

//toLowerCase() method converts a string to lowercase letters and returns the new string.
// const str="HELLO WORLD"
// console.log(str.toLowerCase()); //hello world

//split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
// const str="hello world"
// console.log(str.split(" ")); //["hello", "world"] space ke basis pe split krdia
// console.log(str.split("o")); //["hell", " w", "rld"] o ke basis pe split krdia



// .includes method determines whether one string may be found within another string, returning true or false as appropriate.      
// const str="hello world"
// console.log(str.includes("world")); //true
// console.log(str.includes("sanya")); //false




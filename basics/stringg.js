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


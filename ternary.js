/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1=45;
const num2=75;
// const result=0;
//using if-else method
// if (num1>num2) {
//    const result=num1*2;
//     console.log(result); 
// }else{
//     const result=num1+num2;
//     console.log(result);
// }
//using ternary method
const result=num1>num2?num1*2:num1+num2;
console.log(result);
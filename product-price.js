/**
 * problem:Given a product price as a string(e.g."$249"), extract the neumeric digits
 * and calculate their sum.
 * 
 * orthat
 * input
 * "$249"-ekhan theke dollar sign bad diye digit gulo k sum korte hobe
 * sum=2+4+9
 * out:15
 */

let price="$249";
let chars=price.split("");

let sum=0;
for(let i=0; i<chars.length; i++){
    let element=chars[i];
    if(!isNaN(element) && element !==" "){
        sum=sum+Number(element);
    }
}
// console.log(element);
 console.log(sum);//out:15

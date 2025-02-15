/**
 * Give a product description as a string, reverse the order of the words while keeping
 * the characters in each word unchange
 */
//input:"Lightweight and durable backpack"
//output:"backpack durable and lightweight"

let description="Lightweight and durable backpack";
let reverse="";
let word=description.split(" ");
for(let i=word.length-1; i>=0;i--){
    let element=word[i];
    reverse+=element;
    if(i>0){
        reverse+=" ";
    }
}
console.log(reverse);//out:backpack durable and Lightweight

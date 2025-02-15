/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age=76;
const fee=500;
const isStudent=true;
if (age<10) {
    console.log("Get free ticket");
}else if (age>=60) {
    const discount=fee*15/100;
    const payFee=fee-discount;
    console.log(payFee);
}else if (isStudent) {
    const discount=fee*50/100;
    const payFee=fee-discount;
    console.log(payFee);
    
} else {
    console.log(fee);
}
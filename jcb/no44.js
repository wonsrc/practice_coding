let num = "3849";
let sum = 0;
let arr = num.split('');

for(let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
}

console.log(sum);

/* ----------------------------------------- */

let num1 = "1234";
let sum1 = 0;

while(num1) {
    sum1 = sum1 + num1%10;
    num1 = Math.floor(num1/10);
}

console.log(sum1);
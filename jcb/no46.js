let num = "1234567891011121314151617181920";
let arr = num.split('');
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
}

console.log(`sum : ${sum}`);

/* ====================================== */

let array = [];
let total = 0;

for(let i = 0; i < 20; i++) {
    array[i] = (i+1);
}

array.forEach((n) => {
    while(n){
        total = total + n%10
        n = Math.floor(n/10);
    }
})

console.log(`total : ${total} `);
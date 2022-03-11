let num = "10 2";
// let num = prompt();

let num_arr = num.split(' ');

for(let i = 0; i < num_arr.length; i++) {
    num_arr[i] = parseInt(num_arr[i], 10);
}

console.log(Math.floor(num_arr[0]/num_arr[1]), num_arr[0] % num_arr[1]);


/* ------------------------------------------ */

const number = ["7", "2"];

let val1 = Math.floor(parseInt(number[0], 10) / parseInt(number[1], 10));
let val2 = Math.floor(parseInt(number[0], 10) % parseInt(number[1], 10));

console.log(val1, val2);

// console.clear()

let input = "2 3";

// let input = prompt();

let arr = input.split(' ');

for(let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i],10);

}

console.log(Math.pow(arr[0], arr[1]));
// console.log(arr[0] ** arr[1]);


/* =============================== */
const num = ["2", "6"];

console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));
// let input = "1 2 3 4 5";
// let output = "";

// for(let i = input.length-1; i >= 0; i--) {
//     output += input[i];
// }

// console.log(input);
// console.log(output);

/* -----------------------  */

const arr = prompt().split(' ').reverse();
let reverse_val = "";

for(let i = 0; i < arr.length; i++) {
    reverse_val += arr[i] + " ";
}

console.log(reverse_val);
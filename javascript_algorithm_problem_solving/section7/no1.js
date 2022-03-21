let input = "13 5 11 7 23 15";

let arr = input.split(' ').sort((a, b) => a - b);

console.log(arr.join(' '));
let str = "10 9 8 7 6 5 4 3 2 1";

let arr = str.split(' ');

for(let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
}

console.log(Math.max(...arr));

/* ============================= */

let result = "10 9 8 7 6 5 4 3 2 1";
result = result.split(' ').map((n) => {
    return parseInt(n,10);
});

result.sort((a,b) => {
    return b - a;
})
console.log(result[0]);

// 최대 최소
// 방법 1. d정렬해서 처음이나 끝 
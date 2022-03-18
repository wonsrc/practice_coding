const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let res = {};
let win = "";

for(let i in arr) {
    let key = arr[i];
    // res[key] = res[key] === undefined ? 1 : res[key] = res[key] + 1;
    if(res[key] === undefined) {
        res[key] = 1;
    } else {
        res[key]++;
    }
}

win = Object.keys(res).reduce(function(a, b) {
    return res[a] > res[b] ? a : b
});

console.log(`${win}(이)가  총 ${res[win]} 표로 당선 되었습니다. `);
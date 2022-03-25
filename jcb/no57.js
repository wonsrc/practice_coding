function solution(end) {
    let str = "";
    for(let i = 0; i < end ; i++) {
        str+=i;
    }

    str = str.split('').filter((num) => num === '1');

    return str.length;
}

let end = 1000;
console.log(solution(end));

/* ------------------------------------------------ */
let s = '';
for(let i = 0; i < 1000; i++) {
    s +=i;
}
// 1 for of
let cnt = 0;
for(let k of s) {
    if(k === 1) {
        cnt++;
    }
}

// 2 for in
for(let k in s) {
    if(s[k] === 1) {
        cnt++;
    }
}

// 3
console.log(s.match(/1/g).length);

// 4
const obj = {};

for(let i = 0; i < 1000; i++) {
    let tmp = i;
    while(tmp > 0) {
        let num = tmp %10;
        if(obj[num]) {
            obj[num]++;
        } else {
            obt[num] = 1;
        }
        tmp = parseInt(tmp/10, 10);
    }
}
function solution(input) {
    let answer = [];
    let arr = input.split(' ');

    for(let i = 0; i < arr.length; i++) {
        answer[i] = arr[i][0];

    }

    return answer.join('');

}

// let input = '복잡한 세상 편하게 살자';
let input = '기영이 대가리에 찔려뒤져라';
console.log(solution(input));

/* ====================================== */

const s = '복잡한 세상 편하게 살자'.split(' ');

let res = '';

for(let x of s) {
    res += x[0];
}

console.log(res);


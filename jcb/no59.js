
function solution(str) {
    let answer = '';
    let pos = parseInt((50 - str.length)/2);
        
    for(let i = 0; i < pos; i++) {
        answer += '=';
    }
        
    answer += str;
    
    for(let i = pos + str.length; i < 50; i++) {
        answer += '=';
    }
    
    return answer;
}

let str = 'hi';
console.log(solution(str));

/* ============================================= */

const s = 'hi';

const n = 25 + parseInt((s.length/2), 10);

const left = s.padStart(n, '=');
const right = left.padEnd(50, '=');

console.log(right);
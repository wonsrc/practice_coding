function solution(input) {
    let answer = '';
    let cnt = 0;
    let char = input[0];
    console.log(char);
    console.log(input);
    for(let i = 0; i < input.length; i++) {
        if(char === input[i]) {
            cnt++;
        } else {
            answer += char;
            answer += cnt;
            char = input[i];
            cnt = 1;
        }
    }

    answer += char += cnt;
    return answer;
}

let input = 'aaabbbbcdddd';
console.log(solution(input));

/* =============================================== */

const s = 'aaabbbbcdddd';
let res = '';
let store = s[0];
let cnt = 0;

for(let i of s) {
    if(i === store) {
        cnt++;
    } else {
        res += store + String(cnt);
        store = i;
        cnt = 1;
    }
}

res += store + String(cnt);
console.log(res);



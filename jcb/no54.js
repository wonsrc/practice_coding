function solution(stamp) {
    let answer = "";
    let check = stamp[0];

    for(let i = 0; i < stamp.length; i++) {
        if(check !== stamp[i]) {
            answer = "NO";
            return answer;
        } else {
            check++;
        }
    }
    answer = "YES";
    return answer;
}

let input = "1 4 2 6 3";
let stamp = input.split(' ').map((num) => parseInt(num));

console.log(solution(stamp));

/* ==================================================== */

// 그 숫자는 항상 연속된다. 

const n = "1 3 8 4 2 5".split(' ');
function solution(n) {
    for(let i = 0; i < n.length - 1; i++) {
        if(Number(n[i]) +1 !== Number(n[i+1])) {
            return "NO";
        }
    }
    return "YES";
}

console.log(solution(n));
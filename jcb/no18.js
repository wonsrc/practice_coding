let score = prompt()

let score_arr = score.split(' ');
let sum = 0;

for(let i = 0; i < score_arr.length; i++) {
    score_arr[i] = parseInt(score_arr[i],10);
    sum += score_arr[i];
}

console.log(Math.floor(sum/score_arr.length));

// Math.floor : 주어진 값보다 이하의 가장 큰 정수를 반환한다.(버림)
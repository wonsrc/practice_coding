let limit_weight = 50;
let friends = 5;
let weights = [20, 20, 20, 20, 20];
let sum = 0;
let answer = 0;

for(let i = 0; i < friends; i++) {
    sum += weights[i];
    if(sum > limit_weight) {
        break;
    } else {
        answer++;
    }
}

console.log(answer);

/* ========================================= */

const weightLimit = prompt("무게제한을 입력해주세요");
const memberCount = prompt("몇명이 탈 계획인가요?");
let count = 0;
let totalWeight = 0;

for(let i = 0; i < memberCount; i++) {
    totalWeight = totalWeight + parseInt(prompt("몸무게를 입력해주세요"), 10);
    if(totalWeight <= weightLimit) {
        count++;
    }
}

console.log(count);
function solution(num, heights) {
    let arr = [];
    let answer = [];

    for(let i = 0; i < num; i++) {
        arr[i] = heights[i];
    }

    arr.sort((a,b) => a - b);

    for(let i = 0; i < num; i++) {
        if(arr[i] !== heights[i]) {
            answer.push(i+1);
        }
    }

    return answer;
}

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution(6, [120, 130, 150, 150, 130, 150]));
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

/* ---------------------------------------------------------------------------- */

function solution1(arr1) {
    let answer = [];
    let sort_arr = arr1.slice(); // 깊은 복사

    sort_arr.sort((a,b) => a-b);
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== sort_arr[i]) answer.push(i+1);
    }

    return answer;

}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution1(arr1));
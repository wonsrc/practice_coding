// let input = "13 5 11 7 23 15";

// let arr = input.split(' ').sort((a, b) => a - b);

// console.log(arr.join(' '));

/* ==================< 선택정렬 >=================== */
function solution(arr1) {
    let answer = arr1;

    for(let i = 0; i < arr1.length - 1; i++) {
        let idx = i;
        for(let j = i+1; j < arr1.length; j++) {
            if(arr1[j] < arr1[idx]) {
                idx = j;
            }
            [arr1[i], arr1[idx]] = [arr1[idx], arr1[i]];
        }
    }
    return answer;
}

let arr1 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr1));

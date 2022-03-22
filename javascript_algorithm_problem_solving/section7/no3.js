let input = "1 2 3 -3 -2 5 6 -6";

let arr = input.split(' ')
               .map((num) => parseInt(num,10))
               .sort((a,b) => a - b);

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0 && arr[i+1] < 0) {
        let tmp = 0;
        tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
    }
}

/* =============================================== */

function solution(arr1) {
    let answer = arr1;

    for(let i = 0; i < arr1.length-1; i++) {
        for(let j = 0; j <arr1.length-i-1; j++) {
            if(arr1[j] > 0 && arr1[j+1] < 0) {
                [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
            }
        }
    }

    return answer;
}

let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(arr1);
console.log(solution(arr1));
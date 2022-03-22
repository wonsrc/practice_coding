// let input = "13 5 11 7 23 15";

// let arr = input.split(' ').map((num) => parseInt(num, 10));

// console.log(arr);

// for(let i = 0; i < arr.length-1; i++) {
//     for(let j = 0; j < arr.length -i; j++) {
//         let tmp = 0;
//         if(arr[j] > arr[j+1]) {
//             tmp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = tmp;
//         }
//     }
// }

// console.log(arr);

/* =============< 버블정렬 >================== */

function solution(arr1) {
    let answer = arr1;
    for(let i = 0; i < arr1.length-1; i++) {
        for(let j = 0; j < arr1.length-i-1; j++) {
            if(arr1[j]>arr1[j+1]){
                [arr1[j], arr1[j+1]]= [arr1[j+1], arr1[j]];
            }
        }
    }
    
    return answer;

}

let arr1 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr1));
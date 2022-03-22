// function solution(num, num2) {
//     let answer;

//     let sort_num = num.slice().sort((a, b) => a - b);

//     answer = sort_num.indexOf(num2) + 1;
//     return answer;
    
// }

// let arr = [23, 87, 65, 12, 57, 32, 99, 81];
// let num = 32;
// console.log(solution(arr, num));
/* ------------------< 이분검색 >--------------------- */
// logn의 속도
// 오름차순 정렬을 해놓는 것이 전제조건
function solution1(target, arr1) {
    let answer;
    arr1.sort((a, b) => a-b);
    let lt = 0, rt = arr1.length-1;

    while(lt <= rt) {
        let mid = parseInt((lt + rt)/2);
        if(arr1[mid] === target) {
            answer = mid + 1;
            break;
        } else if(arr1[mid] > target) {
            rt = mid -1;
        } else {
            lt = mid +1;
        }
    }

    return answer;
}                                   

let arr1 = [23, 87, 65, 12, 57, 32, 99, 81];
let num1 = 32;

console.log(solution1(num1, arr1));
// function solution(arr) {
//     let answer = "YES";
//     let stack = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[0] === ')') {
//             answer = "NO";
//             return answer;
//         }

//         if(stack.length !== 0 && arr[i] === ')') {
//             stack.pop();
//         } else {
//             stack.push(arr[i]);
//         }
//     }
    
//     return stack.length === 0 ? answer : answer = "NO";
// }

// let arr1 = ['(', '(', ')', ')'];
// let arr2 = ['(', ')', '(', ')', ')'];
// let arr3 = ['(', '(', '(', '(', ')', '(', ')', ')', ')',')'];
// let arr4 = ['(', ')', ')', '('];
// console.log(solution(arr4));

/* ---------------------------------------------------------------- */

function math_bracket(arr) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '(') {
            count++;
        }

        if(arr[i] === ')') {
            count--;
        }
    }
    if(count != 0) {
        return false;
    }

    let bracket = [];
    for(let i in arr) {
        if(arr[i] === '(') {
            bracket.push('(');
        }

        if(arr[i] === ')') {
            if(bracket.length === 0) {
                return false;
            }
            bracket.pop();
        }
    }
    return true;
}


const n = '((())))'.split('');
console.log(n);
console.log(math_bracket(n));


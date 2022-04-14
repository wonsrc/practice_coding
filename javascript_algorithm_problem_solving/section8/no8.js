function solution(num) {
    let answer = 0;
    let arr = [];

    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            arr.push([i+1, j+1]);
        }
    }

    return arr;
}

let num = 3;

console.log(solution(num));


/* ========================================= */

function solution() {
    
}
// function solution(num, coordinates) {

//     for(let i = 0; i < num-1; i++) {
//         for(let j = 0; j < num-1; j++) {
//             if(coordinates[j][0] > coordinates[j+1][0]){
//                 tmp = coordinates[j];
//                 coordinates[j] = coordinates[j+1];
//                 coordinates[j+1] = tmp;
//             }

//             if(coordinates[j][0] >= coordinates[j+1][0] && coordinates[j][1] > coordinates[j+1][1]){
//                 tmp = coordinates[j];
//                 coordinates[j] = coordinates[j+1];
//                 coordinates[j+1] = tmp;
//             }
//         }
//     }

//     return coordinates;

// }
// let arr = [[2,7], [1,3], [1,2], [2,5], [3,6]]
// console.log(solution(5, arr));

/* -------------------------------------------------------- */

function solution1(arr1) {
    let answer = arr1;
    arr1.sort((a, b) => {
        if(a[0]===b[0]) return a[1] -b[1];
        else return a[0]-b[0];
    });
    return answer;
}

let arr1 = [[2,7], [1,3], [1,2], [2,5], [3,6]];

console.log(solution1(arr1));
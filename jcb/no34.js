// let class1 = [155, 156, 165, 166, 169, 176];
// let sort_class = [];
// let cnt = 0;

// for(let i = 0; i < class1.length; i++) {
//     sort_class[i] = class1[i];
// }
// sort_class = sort_class.sort((a,b) => a-b);
// console.log(class1);
// console.log(sort_class);

// for(let i = 0; i < sort_class.length; i++) {
//     if(sort_class[i] !== class1[i]) {
//         console.log("NO");
//     } else {
//         cnt++;
//     }

//     if(cnt === sort_class.length) {
//         console.log("YES");
//     }
// }

/* ============================================ */

let unsorted = "176 156 155 165 166 169";
let sorted = "";

sorted = (unsorted.split(' ').sort(function(a, b) {
    return a-b;
    // (-) 값이 리턴되면 오름차순
    // (+) 값이 리턴되면 내림차순
})).join(' ');

console.log(unsorted);
console.log(sorted);

if(unsorted === sorted) {
    console.log("YES");
} else {
    console.log("NO");
}
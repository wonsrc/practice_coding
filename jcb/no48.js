let str = "AAABBBcccddd";
let output = "";
for(let i in str) {
    if(str[i].toLowerCase() !== str[i]){
        output += str[i].toLowerCase();
    } else {
        output += str[i].toUpperCase();
    }
}

console.log(output);

/* ====================================== */

const str1 = "AAABBBcccddd";
const arr = [];

for(let i = 0; i < str1.length; i++) {
    if(str1[i] === str1[i].toUpperCase()) {
        // 문자열은 값을 탐색할 수는 있지만 변경할 수는 없다.
        arr.push(str[i].toLowerCase());
    } else {
        arr.push(str[i].toUpperCase());
    }
}

console.log(arr.join(''));
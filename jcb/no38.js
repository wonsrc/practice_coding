// 97 86 75 66 55 97 85 97 97 95

const scores = ["97", "97", "97", "97", "95", "86", "85", "75", "66", "55"];

scores.sort(function(a, b) {
    return a - b;
});

let top3 = [];
let count = 0;

while(top3.length < 4) {
    let value = scores.pop();
    if(!top3.includes(value)) {
        top3.push(value);
    }
    count++;
}

console.log(top3); 
console.log(count - 1); 


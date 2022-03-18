let input = "hqllo my namq is hyqwon";
let output = "";

for(let i = 0; i < input.length; i++) {
    if(input[i] === "q") {
        output += "e";
    } else {
        output += input[i];
    }
}

console.log(output);

/* ===================================== */

const word = "hqllo my namq is hyqwon";

// split & join

console.log(word);
console.log(word.split('q').join('e'))
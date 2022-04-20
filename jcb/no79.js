let l = [10, 20, 25, 27, 34, 35, 39];
let n = 3;

function solution(l, n) {
    let tmp = [];
    let arr = l.slice();
    let idx = 0;
    let answer_idx = 0;
    let answer_value = [];

    for(let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }

    for(let i = 0; i < arr.length; i++) {
        tmp.push(Math.abs(l[i] - arr[i]));
    }

    idx = Math.min.apply(null, tmp);
    for(let i in tmp) {
        if(tmp[i] === idx) {
            answer_idx = i;
            answer_value.push(l[i]);
            answer_value.push(arr[i]);
        }
    }

    console.log(asdf);

    return `index : ${answer_idx} \nvalue : ${answer_value[0]}, ${answer_value[1]}`;
}

console.log(solution(l, n));
function count(input, distance) {
    let cnt = 1, ep = input[0];

    for(let i = 1; i < input.length; i++) {
        if(input[i] - ep >= distance) {
            cnt++;
            ep = input[i];
        }

        return cnt;
    }

}

function solution(num, input) {
    let answer;

    let lt = 1;
    let rt = input[input.length-1];

    while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if(count(input, mid) >= num) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }

    return answer;
}

let str = "1 2 8 4 9";

let input = str.split(' ').map((num) => parseInt(num, 10)).sort((a,b) => a - b);
console.log(input);

console.log(solution(3, input));
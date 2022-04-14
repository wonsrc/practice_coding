function solution(max, weigths) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = weigths.length;

    function DFS(L, sum) {

        if(sum > max) return;
        if(L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L+1, sum+weigths[L]);   // 태운다
            DFS(L+1, sum); // 안태운다
        }
    }

    DFS(0 ,0);
    return answer;
}

let max = 259;
let weigths = [81, 58, 42, 33, 61];

console.log(solution(max, weigths));
// 부분집합

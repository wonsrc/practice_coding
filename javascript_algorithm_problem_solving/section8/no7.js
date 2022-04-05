function solution(arr, limit_time) {
    let answer = 0;

    function dfs(level, sum, total) {
        if(sum > limit_time) return;
        if(level === arr.length) {
            // console.log(total);
            answer = Math.max(answer, total);
            return;
        } else {
            // 풀었을 때
            dfs(level+1, sum + arr[level][1], total + arr[level][0]);
            // 못 풀었을 때
            dfs(level+1, sum, total);
        }

        return answer;

    }

    dfs(0, 0, 0)
    return answer;

}

let problems = 5;
let limit_time = 20;

let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];

console.log(solution(arr, limit_time));

/* --------------------------------------------------- */

function solution(m, ps, pt) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = ps.length;
    function DFS(L, sum , time) {
        if(time > m) return;
        if(L === n) {
            answer=Math.max(answer, sum);
        } else {    
            DFS(L+1, sum + ps[L], time + pt[L]);
            DFS(L+1, sum, time);
        }

    }

    DFS(0, 0, 0);
    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
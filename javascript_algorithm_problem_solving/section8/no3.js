function solution(v) {
    let answer = [];
    function DFS(v) {
        if(v > 7) {
            return;
        } else {
            /* 전위 순회 */
            // console.log(v);
            // DFS(v*2);
            // DFS(v*2+1);

            /* 중위 순회 */
            // DFS(v*2);
            // console.log(v);
            // DFS(v*2+1);

            /*후위 순회 */
            // DFS(v*2);
            // DFS(v*2+1);
            // console.log(v);
        }
    }

    DFS(v);
    return answer;
}

console.log(solution(1));
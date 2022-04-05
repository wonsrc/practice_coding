function solution(arr) {
  let answer = [];
  
  function dfs(level, sum) {
    if(level === arr.length) {
        answer.push(sum);
    } else {
      // O
      dfs(level+1, sum + arr[level]);
      // X
      dfs(level+1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}

// let arr = [1, 3, 5, 6, 7, 10];
let arr = [1, 3, 6];

console.log(solution(arr));
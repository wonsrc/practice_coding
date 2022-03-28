function solution(numbers, target) {

    let answer = 0;
    dfs(0, 0);
    return answer;
  
    function dfs(cnt, sum) {
  
      if(cnt === numbers.length) {
        if(sum === target) {
          answer++;
        }
        return;
      }
  
      dfs(cnt + 1, sum + numbers[cnt]);
      dfs(cnt + 1, sum - numbers[cnt]);
    }
  
  }
  
  console.log(solution([4, 1, 2, 1],2));
  console.log(solution([1, 1, 1, 1, 1],3));
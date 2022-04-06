// 깊이 우선 탐색 DFS(Depth First Search) - Stack
// 너비 우선 탐색 BFS(Breath First Search) - Queue

function dfs(graph, start){
    let visited = [];
    let stack = [start];
  
    while (stack.length !== 0){
      let n = stack.pop();
      if (!visited.includes(n)){
        visited.push(n);
        let sub = graph[n].filter(x => !visited.includes(x));
        for(let i of sub) {
          stack.push(i);
        }
      }
    }
    return visited;
  }

  const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  
  console.log(dfs(graph, 'E'));
  
  
const graph = {1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]};

const user_input = [1, 7];
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);


let queue = [start];
let visited = [];

function solution(n, visited){
    let node = n[n.length-1];
    let length = 0;

    if(node === end) {
        return visited.length;
    }

    if (visited.includes(node)) {
        return visited.length;
    } else {
        visited.push(node);
    }

    let max = [];

    for(let next_node in graph[node]) {
        n.push(graph[node][next_node]);
        max.push(length, solution(n,visited));
        length = Math.apply(null, max);

        queue.pop();
}

console.log(solution(queue, visited));
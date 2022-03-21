function solution(s, n) {
    // let lru = new Array(s).fill(0);
    let lru = [];

    for(let i = 0; i < n.length; i++) {
            if(lru.includes(n[i] === false)) {
                lru.unshift(n[i]);
                break;
            } else {
                lru.unshift(n[i]);
                lru[lru.indexOf(n[i])] = 0;
            }
    }

    return lru;
}

console.log(solution(5,[1,2,3,2,6,2,3,5,7]));
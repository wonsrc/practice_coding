const user_input = '6 3'.split(' ');

const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);

function sol(n, k) {
    let index = 0;
    q = [];
    for(let i = 0; i < n ; i ++) {
        q.push(i+1);
    }

    console.log(`strart q : ${q}`);
    while(q.length > 2) {
        console.log(`q : ${q} , index : ${index}`)
        if(index > q.length-1) { // index가 q의 길이를 넘을때
            index -= q.length;
        }

        q.splice(index, 1);
        index += k;
        index -= 1;
    }

    return q;
}

console.log(sol(n, k));

// list 를 순회하고 list 의 있는 결과물을 삭제

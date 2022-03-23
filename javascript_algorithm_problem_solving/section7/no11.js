function count(songs, capacity) {
    // 결정 알고리즘은 답이 유효한지 아닌지 확인하는게 가장 중요하다.
    let cnt = 1, sum = 0;
    for(let x of songs) {
        if(sum+x > capacity) {
            cnt++;
            sum = x;
        } else {
            sum += x;
        }
    }

    return cnt;

}

function solution(num, input) {
    let answer = 0;

    let lt = Math.max(...input);
    let rt = input.reduce((a,b) => a + b, 0);
    
    while(lt <= rt ){
        let mid = Math.floor((lt + rt) / 2);
        if(count(input, mid) <= num){
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }

        //mid = Math.floor((lt + rt)/2);
    }

    return answer;
}

let str = "123456789";
let input = str.split('').map((num) => parseInt(num, 10));
let num = 3;

console.log(solution(num, input));


/* ================================================ */

// 결정 알고리즘
// 이분 검색을 이용
// 최소값 lt 는 주어진 값중에 제일 큰값
// 범위가 최소 제일 큰값이 들어갈 수 있을정도만큼은 되야한다.
// 최대값 rt는 다 더한 값

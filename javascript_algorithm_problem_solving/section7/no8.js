// 끝나는 시간 기준으로

function solution(meeting) {
    let answer = 0;

    meeting.sort((a,b)=>{
        if(a[1]===b[0]) return a[0]-b[0];   
        else return a[1]-b[1];
        // 끝나는 시간이 같으면 시작시간으로 정렬
    })
    
    let et = 0;
    for(let x of meeting) {
        if(x[0]>=et){
            answer++;
            et = x[1];
        }
    }
    return answer;
}

let arr = [[1,4], [2,3], [3,5], [4,6], [5,7]];
console.log(solution(arr));

let arr2 = [[3, 3], [2,3], [1, 3]];
console.log(solution(arr2));

/* 그리디 */
// 정렬하고 선택한다.
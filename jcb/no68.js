


function solution(time_table, time) {
    let answer = [];
    let arr = [];
    let tmp = [];

    // time_table 시간, 분으로 나누기
    for(let i = 0; i < time_table.length; i++) {
        arr[i] = time_table[i].split(':').map((num) => parseInt(num));
    }

    // time 변경해주기
    tmp = time.split(':').map((num) => parseInt(num));
    let hour = tmp[0];
    let minute = tmp[1];

    // 비교
    for(let i = 0; i < arr.length; i++) {
        if(hour >= arr[i][0] && minute > arr[i][1]) {
            answer.push('지나갔습니다');
        } else {
            
        }
    }
    
    console.log(arr);
    return answer;
}

let time_table = ["12:30", "13:20", "14:13"];
let time = "12:40";

console.log(solution(time_table, time));

/* --------------------------------------------------------- */

const 버스시간 = ["12:30", "13:20", "14:13"];
const 기준시간 = "12:40"

function solution(버스시간, 기준시간) {
  let answer = [];
  기준시간 = 기준시간.split(":").map((num) => parseInt(num, 10));
  기준시간 = 기준시간[0]*60 + 기준시간[1];

  for(let i in 버스시간) {
    let time = 버스시간[i].split(":").map((num) => parseInt(num, 10));
    time = time[0] * 60 + time[1];
    
    if(time < 기준시간) {
      answer.push('지나갔습니다');
    } else {
      let 시간 = parseInt((time - 기준시간) / 60, 10);
      let 분 = parseInt((time - 기준시간) % 60, 10);
      answer.push(String(시간).padStart(2,0) + '시간 ' + String(분).padStart(2,0) + '분');

    }
    
  }
  return answer;

}

console.log(solution(버스시간, 기준시간));

// 기준시간을 연산할 수 있도록 분단위로 바꿔준다
// 
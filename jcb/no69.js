function solution(n) {
    let answer = [];
    let next = false;
    let tmp = parseInt(n/2);
    let tmp2 = 0;
    let tmp3 = 0;

    tmp2 = check(tmp);
    answer.push(tmp2);

    tmp3 = tmp - tmp2;
    answer.push(tmp + tmp3);

    return answer;
}

// let n = 100;
let n = 56;
console.log(solution(n));

function check(num) {
    let next = false;
    while(next === false) {
        for(let i = 2; i < num; i++) {

        }
    
        next = true;
    }

return tmp;
}

/* ------------------------------------------------------- */

let prime = [];
let is_prime = true;
let val = 100;
let answer = [];

for (let i = 2; i < val; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      is_prime = false;
    }
  }
  if (is_prime) {
    prime.push(i);
  }
  is_prime = true;
}

for (let n of prime) {
  if (prime.includes(val - n) && n <= val - n) {
    answer.push([n, val - n]);
  }
}

let 차이 = answer.map((e) => e[1] - e[0]);

let 작은값 = answer[차이.indexOf(Math.min.apply(null, 차이))];
let 큰값 = answer[차이.indexOf(Math.max.apply(null, 차이))];

console.log(작은값, 큰값);

/* ------------------------------------------------------------- */
function solution(n) {
    const arr = [];
    
    // 인덱스 번호가 주어진 숫자 n과 대응하도록 
		// 빈 배열을 만들고 원소는 true 값으로 채워준다.
  	// 여기서 true 는 소수라는 의미이다.
		// 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.
    for (let i = 0; i < n + 1; i += 1) {
        arr.push(true);
    }
    
    // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
    // arr[i] 가 소수일 경우, 반복문을 진행한다.
    // 맨 처음 시작하는 2는 소수이므로,
    // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
  	// 제곱근까지 반복한다.
    for (let i = 2; i * i <= n; i += 1) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
  	// 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
    arr.splice(0, 2, false, false);
    
  	// 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
    const result = arr.filter((value) => {
        return value !== false;
    })
    
    return result.length;
}
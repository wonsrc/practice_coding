function solution(input) {
    let answer = 0;

    arr = input.split('');
    console.log(arr);

    for(let i = 1; i <= parseInt(input, 10); i++) {
        if(i < 10) {
            console.log(i + "if")
            if(i % 3 === 0 ) {
                answer++;
            }
        } else {
            console.log(i + " else ");
            if( check(i) ) answer++;
        }
    }

    console.log(answer);

}

function check(number) {
    let tmp = String(number);
    let arr = tmp.split('');
    console.log(arr);
    let res = false;

    for(let i = 0; i < arr.length; i++) {
        let num1, num2;

        num1 = parseInt(arr[0]);
        num2 = parseInt(arr[1]);

        if(num1 % 3 === 0 && num2 % 3 === 0 && num2 !== 0) {
            console.log(num1, num2);
            res = true;
        }
    }

    return res;
}


let input = prompt();
console.log(solution(input));

/* 
    사용자에게 입력받은 수를 length로 for문 작성

    i가 10 미만일 때 
    3으로 나머지 연산한 값이 0 이면 answer++;

    i가 10 이상일 때는
    문자열로 바꿔서 배열에 ['num1', 'num2'] 꼴로 바꿔준다
    문자열이 된 num1, num2를 다시 정수로 파싱해서 
    3으로 각각 나머지 연산시켜주고
    num2 가 0 아닌 
    세가지를 만족할 때 answer++;
*/
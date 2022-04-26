// while (1){
//   let order = prompt('데이터 입력(1), 프로그램 종료(2)');
//   if (order === 1){
//       const ex = prompt('데이터를 입력하세요');
//       console.log(math(ex));
//   } else {
//       break;
//   }
// }

let input = "5 + 7){ * (3 * 5)"
console.log(math(input));

function math(e) {
  let stack = [];

  let arr = e.split('');
  console.log(arr);

  for(let i of arr) {
    if( i === "(") {
      stack.push(i);
    }

    if( i === "{") {
      stack.push(i);
    }

    if( i === ")") {
      if(stack[stack.length-1] === '(') {
        stack.pop();
      }
    }

    if( i === "}") {
      if(stack[stack.length-1] === '{') {
        stack.pop();
      }
    }

  }

  return stack.length === 0 ? true : false;

}

/* ------------------------------------------- */

let user_input = '{()}{';

function solution(s) {
  const m = {
    ')' : '(',
    '}' : '{'
  }

  let stack = [];

  for(let i in s) {
    if(s[i] === '(' || s[i] === '{') {
      stack.push(s[i]);
    } else if(m[s[i]]) {

      if(stack.length === 0) {
        return false;
      } else {
        let t = m[s[i]];
        if( t != stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}

console.log(solution(user_input));
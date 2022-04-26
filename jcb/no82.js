// while (1){
//   let order = prompt('데이터 입력(1), 프로그램 종료(2)');
//   if (order === 1){
//       const ex = prompt('데이터를 입력하세요');
//       console.log(math(ex));
//   } else {
//       break;
//   }
// }

let input = "(5 + 7) * (3 * 5)"
console.log(math(input));

function math(e) {
  let stack = [];

  let arr = e.split('');
  console.log(arr);

  for(let i of arr) {
    if( i === "(") {
      stack.push(i);
    }

    if( i === ")") {
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;

}
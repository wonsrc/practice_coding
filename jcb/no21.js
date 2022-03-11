
// 1)  var x = {1, 2, 3, 5, 6, 7};  // X
// 2)  var x = {};                  // X
// 3)  var x = new Set('javascript');  // O
// 4)  var x = new Set(range(5));   // X
// 5)  var x = new Set();              // O

/* ----------------------------------------- */

const list = [1, 2, 2, 3, 4, 5, 5, 6];

// set
// 중복되지 않는 데이터를 저장하는 데이터 구조입니다.

let set_val = new Set(list);
set_val.delete(10);
console.log(set_val);
console.log(set_val.has(1))

let a = [
    [1, 2],
    [3, 4]
  ]
  
  let b = [
    [5, 6],
    [7, 8]
  ]
  
  // let result =  [
  //   [
  //     a[0][0] * b[0][0] + a[0][1] * b[1][0], 
  //     a[0][0] * b[0][1] + a[0][1] * b[1][1]
  //   ],
  //   [
  //     a[1][0] * b[0][0] + a[1][1] * b[1][0], 
  //     a[1][0] * b[0][1] + a[1][1] * b[1][1]
  //   ]
  // ]
  
  // console.log(result);
  
  function solution(a, b) {
    let result = [];
  
    const len = a.length;
  
    if(a[0].length === b.length) {
      let result = [];
      for(let i = 0; i < len; i++) {
        let row = [];
        for(let j = 0; j < len; j++) {
          let el = 0;
          for(let k = 0; k < len; k++) {
            el += a[i][k] * b[k][j];
          }
          row.push(el);
        }
        result.push(row);
      }
      return result;
    } else {
      return -1;
    }
  }
  
  console.log(solution(a, b));
function solution(total) {
    let answer = [];
    let people;
    let i = 1;
    while(true) {
        let sum = parseInt(i * (i - 1) / 2);
  
        if(sum > total) {
            people = i - 1;
            break;
        }
  
        i++;
        sum = 0;
    }
  
    answer.push([people + 1, total - parseInt((people) * (people - 1) / 2, 10)]);
    return answer;
    
  }
  
  let total = 59;
  
  console.log(solution(total));

  /* ---------------------------------------------------- */

  function solution(total) {
    let 사람 = 0;
    let 총악수 = 0;
    let tmp = 0;
    while (true) {
      총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);
  
      if (total < 총악수) {
        break;
      }
      tmp = 총악수;
      사람 += 1;
    }
  
    return [parseInt(total - tmp, 10), 사람];
  }
  
  let total = 59;
  
  console.log(solution(total));
  
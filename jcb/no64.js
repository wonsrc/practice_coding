let n = 24;
let res = 0;

while(true) {
    if(n % 7 === 0) {
        res += parseInt(n/7, 10);
        console.log(res);
        break;
    } 
    n -= 3;
    res += 1;
    
    if(n < 0) {
        console.log(-1);
        break;
    }
}
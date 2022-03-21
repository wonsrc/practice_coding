let input = "1 2 3 -3 -2 5 6 -6";

let arr = input.split(' ')
               .map((num) => parseInt(num,10))
               .sort((a,b) => a - b);

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0 && arr[i+1] < 0) {
        let tmp = 0;
        tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
    }
}

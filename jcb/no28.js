let str = "Javascript";
let tmp;

for(let i = 0; i <str.length-1; i++) {
    tmp = str[i+1];
    console.log(str[i], tmp);
}

/* -------------------------------------- */

for(let i = 0; i < str.length-1; i++) {
    console.log(str[i], str[i+1]);
}
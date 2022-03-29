let a = [1, 2, 3, 4];
let b = ['a', 'b', 'c', 'd'];
let answer =[];
for(let i = 0; i < a.length; i++) {
    answer[i] = [a[i], b[i]];
}

let c = a.map((e, i) => {
    if(i % 2 === 0) {
        return [e, b[i]];
    } else {
        return [b[i], e];
    }
});
let d = []; // forEach 는 새로운 배열을 만들어줘야 한다. 
a.forEach(function(e,i) {
    if(i % 2 === 0) {
        d.push([e, b[i]]);
    } else {
        d.push([b[i], e]);
    }
})

// map과 foreach는 기능으 같으나 return의 차이가 있다.


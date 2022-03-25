let students = ['강은지','김유정','박현서',
'최성훈','홍유진','박지호','권윤일','김채리',
'한지호','김진이','김민호','강채연'];

students.sort();

let name_table = [];
for(let i = 0; i < students.length; i++) {
    name_table[i] = {};
    name_table[i]['번호'] = i+1;
    name_table[i]['이름'] = students[i];
}

console.log(name_table);

for(let key in students) {
    console.log(`번호 : ${parseInt(key) + 1}, 이름 : ${students[key]}`);
}
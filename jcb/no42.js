const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = "5";
const date = "5";

function solution(a, b) {
    const theDay = new Date(`2020-${a}-${b}`);
    console.log(day[theDay.getDay()]);  //getDay() 요일을 숫자로 반환한다.
}
solution(month, date);
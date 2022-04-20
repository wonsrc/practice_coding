let city_area = 5;
let search_area = 3;
let city_map = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

// [0][0] [0][1] [0][2]
// [1][0] [1][1] [1][2]
// [2][0] [2][1] [2][2]

let i_add = 0;
let j_add = 0;
let value = 0;
let value_arr = [];

for(let i_add = 0; i_add <=city_area - search_area; i_add++) {
  for(let j_add = 0; j_add <=city_area - search_area; j_add++) {
    for(let i = i_add; i <= search_area-1 + i_add; i++) {
      for(let j = j_add; j <= search_area-1 + j_add ; j++) {
        value += city_map[i][j];
      }
    }
    value_arr.push(value);
    value = 0;
  }
}

console.log(Math.max.apply(null, value_arr));

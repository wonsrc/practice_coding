function solution(num, coordinates) {

    for(let i = 0; i < num-1; i++) {
        for(let j = 0; j < num-1; j++) {
            if(coordinates[j][0] > coordinates[j+1][0]){
                tmp = coordinates[j];
                coordinates[j] = coordinates[j+1];
                coordinates[j+1] = tmp;
            }

            if(coordinates[j][0] >= coordinates[j+1][0] && coordinates[j][1] > coordinates[j+1][1]){
                tmp = coordinates[j];
                coordinates[j] = coordinates[j+1];
                coordinates[j+1] = tmp;
            }
        }
    }

    console.log(coordinates);

}

console.log(solution(5, [[2,7], [1,3], [1,2], [2,5], [3,6]]));

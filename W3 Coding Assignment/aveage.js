//display average age from a set array

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
var total = 0;

for(i = 0; i < ages.length; i++){
    total += ages[i];
}
console.log(total/ages.length);
//create new array of length of elements, add up the values in the new array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = new Array();
var sum = 0;
for(i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}

for(j = 0; j < nameLengths.length; j++){
    sum += nameLengths[j];
}
console.log(sum);
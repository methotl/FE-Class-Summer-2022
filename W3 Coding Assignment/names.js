//calculate average numbers of letters per name of the array names

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var total = 0;
for(i = 0; i < names.length; i++){
    total += names[i].length;
}

console.log(total / names.length);
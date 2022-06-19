//concatenate the array seperated by spaces

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var output = "";

for(i = 0; i < names.length; i++){
    output += names[i] + " ";
}

console.log(output);
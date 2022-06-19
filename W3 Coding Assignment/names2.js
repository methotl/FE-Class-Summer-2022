//create new array of length of eleements
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = new Array();

for(i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}

for(j = 0; j < nameLengths.length; j++){
    console.log(nameLengths[j]);
}
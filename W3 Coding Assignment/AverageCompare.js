//averages list of numbers from users

const prompt = require("prompt-sync")({ signit: true });

var arrynum1 = prompt("Please list out a set of numbers to be averaged, seperate the numberss with a comma please: ").split(","); //input first set of numbers
var arrynum2 = prompt("Please list out another set of numbers to compare its average to the first set, seperate with a comma please: ").split(","); //input second set of numbers

//initialize the variables
var sum1 = 0;
var sum2 = 0;
var av1 = 0;
var av2 = 0;

//convert input strings to numbers
arrynum1 = arrynum1.map(Number); 
arrynum2 = arrynum2.map(Number);

//sum values for each array
for(i = 0; i < arrynum1.length; i++){
    sum1 += arrynum1[i];
}
for(j = 0; j < arrynum2.length; j++){
    sum2 += arrynum2[j];
}
//calcualte averages of the arrays
av1 = (sum1 / arrynum1.length);
av2 = (sum2 / arrynum2.length);
//console log true if av1 > av2
console.log(av1 > av2);


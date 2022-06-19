//averages list of numbers from users

const prompt = require("prompt-sync")({ signit: true });

var arrynumbers = prompt("Please list out the numbers to be added up seperate the values wiht a comma please: ").split(",");

var sum = 0;

arrynumbers = arrynumbers.map(Number); //converts input from strings to numbers

for(i = 0; i < arrynumbers.length; i++){
    sum += arrynumbers[i];
}
console.log(sum / arrynumbers.length);
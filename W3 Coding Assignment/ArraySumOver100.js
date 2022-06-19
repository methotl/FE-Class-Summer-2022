//sums list of numbers from user

const prompt = require("prompt-sync")({ signit: true });

var arrynumbers = prompt("Please list out the numbers to be added up seperate the values wiht a comma please: ").split(",");
var sum = 0;
arrynumbers = arrynumbers.map(Number);
for(i = 0; i < arrynumbers.length; i++){
    sum += arrynumbers[i];
}
console.log(sum > 100);
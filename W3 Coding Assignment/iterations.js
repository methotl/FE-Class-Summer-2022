//concatenate a given word a given number of times
const prompt = require("prompt-sync")({ signit: true });
let word = prompt("What would you like displayed?  ");
let n = prompt("How many times would you like it concatenated?  ");
let newWord = "";
function printout(a, b){
    for(i = 0; i < b; i++){
        newWord += a;
    }
};

printout(word, n);

console.log(newWord);
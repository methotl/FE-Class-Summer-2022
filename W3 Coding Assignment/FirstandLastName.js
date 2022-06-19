//prints first and last name
const prompt = require("prompt-sync")({ signit: true });
let firstName = prompt("What is your first name please?  ");
let lastName = prompt("What is your last name please?  ");
let newWord = "";
function printout(a, b){
    newWord = a + " " + b;
};

printout(firstName, lastName);

console.log(newWord);
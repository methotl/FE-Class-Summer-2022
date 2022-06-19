//compares a boolean and a number

const prompt = require("prompt-sync")({ signit: true });

var isHotOutside = prompt("Is it hot outside? true or false only please  ");
var moneyInPocket = parseFloat(prompt("How much money is in your pocket? "));

//converts decimal to integer for easier comaprisons
moneyInPocket = moneyInPocket * 100;

function willBuyDrink(a,b){
    if(a === "true" && b > 1050){
        console.log("true");
    }else{
        console.log("false");
    }}

willBuyDrink(isHotOutside, moneyInPocket);

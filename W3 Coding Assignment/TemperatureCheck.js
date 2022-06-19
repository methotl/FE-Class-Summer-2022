//determines if person has temperature and gives output based on results

const prompt = require("prompt-sync")({ signit: true });

var temp = parseFloat(prompt("what is your temperature to the nearest tenths please:  "));

//converts temp to integer for ease of comparison

temp = temp * 10;

function tempcheck(a){
    if( a <=986){
        console.log("You're fine!");
    }else{
        if( a < 1000){
            console.log("You're heating up, get some rest!");
        }else{
            console.log("Call the doctor now!!");
        }
    }
};

tempcheck(temp);

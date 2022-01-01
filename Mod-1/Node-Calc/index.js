const readline = require("readline-sync");

var num1 = Number(readline.question("Num1 "));
var num2 = Number(readline.question("Num2 "));
var op = readline.question("Operation? ");


if(op === "add") {
  console.log(add(num1, num2)) 
} else if(op === "sub") {
    console.log(sub(num1, num2))
} else if(op === "mul") {
    console.log(mul(num1, num2))
} else if(op === "div") {
    console.log(div(num1, num2))
} else {
    console.log("Not a valid operator")
}

function add(num1 , num2) {
        return num1 + num2   
}
function sub(num1 , num2) {
    return num1 - num2   
}

function mul(num1 , num2) {
    return num1 * num2   
}

function div(num1 , num2) {
    return num1 / num2   
}












/*Write a function that takes a num1 and num2 and returns whether 
num1 is divisible by num2.*/

let isDiv = (num1,num2) => {
    if(num1 % num2 === 0) {
        console.log("true")
    } else {
        console.log("false")
    }

}

isDiv(10,2)
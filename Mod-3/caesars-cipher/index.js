const readlineSync = require("readline-sync")
const input = readlineSync.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readlineSync.question('How many letters would you like to shift? '));


function cipher(str) {

    let newString = "";

    for (let i = 0; i < str.length; i ++){
        let asciiValue = str[i].charCodeAt() + shift


        if (asciiValue >= 97 && asciiValue <= 122) {

            newString += String.fromCharCode(asciiValue)

        } else if (asciiValue > 122) {
            let diff = asciiValue - 122
            let newAscii = diff + 96
            newString += String.fromCharCode(newAscii)
        }

        else {
            newString += str[i]
        }
    }

return newString

}


console.log(cipher(input))




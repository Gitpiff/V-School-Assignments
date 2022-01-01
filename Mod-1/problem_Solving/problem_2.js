let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]

for(i = 0; i < lettersWithStrings.length; i ++) {
    if(lettersWithStrings[i].includes("!")) {
        console.log(lettersWithStrings[i])
    }
}
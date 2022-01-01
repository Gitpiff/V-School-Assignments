// // // //Reverse String

// // // function reverseStr(str) {
// // //     // const reversed = str.split("");

// // //     // reversed.reverse();

// // //     // console.log(reversed.join(""));

// // //     //////////////////////////////////////////////////////////

// // //     //better way -cleaner code-

// // //     // return str.split("").reverse().join("")


// // //     //////////////////////////////////////////////////////////

// // //     //If you can't use .reverse() use for loops


// // //     // let reversedString = "";

// // //     // for (let i = str.length - 1; i >= 0; i--) {
// // //     //     reversedString += str[i]
// // //     // }

// // //     // return reversedString


// // //     //////////////////////////////////////////////////////////

// // //     //use for of loops, ES6

// // //     // let reversedString = "";

// // //     // for (let char of str) {
// // //     //     reversedString = char + reversedString
// // //     // }

// // //     // return reversedString

// // //     //////////////////////////////////////////////////////////

// // //     //use .forEach() ES6

// // //     let reversedString = "";

// // //     str.split("").forEach((char) => reversedString = char + reversedString);

// // //     return reversedString





// // // }


// // // console.log(reverseStr("Whale"))















// // // String to construct: "On my way to Techtonic!"
// // var wordObj = {
// //     space: ' ',
// //     punctuation: '!',
// //     letterBank: {
// //         pairedLetters: {
// //             one: 'my',
// //             two: 'ch',
// //             three: ''
// //         },
// //         singleLetters: {
// //             one: 't',
// //             two: 'n',
// //             three: ''
// //         },
// //         vowels: ['a', 'e', 'i', 'o', 'u'],
// //     },
// //     wordBank: {
// //         one: 'way',
// //         two: 'tonic'
// //     }
// // };

// // //*******************************************************
// // //** DO NOT ALTER THE FUNCTION NAME BELOW THIS COMMENT **
// // //**      OR ANY OF THE CONTENTS OF wordObj ABOVE      **
// // //*******************************************************

// // function makeSentence() {

// //     //   return // construct your string here using only the properties within wordObj

// //     const letterO = wordObj.letterBank.vowels[3];
// //     const letterN = wordObj.letterBank.singleLetters.two;
// //     const my = wordObj.letterBank.pairedLetters.one;
// //     const way = wordObj.wordBank.one;
// //     const letterT = wordObj.letterBank.singleLetters.one;
// //     const letterE = wordObj.letterBank.vowels[1];
// //     const space = wordObj.space;
// //     const ch = wordObj.letterBank.pairedLetters.two;
// //     const tonic = wordObj.wordBank.two;
// //     const exclamation = wordObj.punctuation



// //     return capitali + letterN + space + my + space + way + space + letterT + letterO + space + letterT + letterE + ch + tonic + exclamation




// // }

// // console.log(makeSentence()); // prints your constructed string
// function averageArr(arr) {

//     // write your code here

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     // let average = sum / arr.length

//     return sum

// }

// console.log(averageArr([1, 2, 3, 4, 5])); // should print 3


// function longestWord(str) {

//     // write your code here
//     //Sort and return the longest string
//     let strSplit = str.split(" ").sort((a, b) => { return b.length - a.length })

//     //if multiple words, put into an array
//     let longestWords = strSplit.filter(function (word) {
//         return word.length === strSplit[0].length
//     })


//     return longestWords

// }

// console.log(longestWord('this is my test string  strinn')); // should print 'string'


function reverseVowels(input) {

    // write your code here
    const vowels = {};
    for (const char of "aeiouAEIOU") {
        vowels[char] = true;
    }

    const letters = input.split("");
    let leftPointer = 0;
    let rightPointer = input.length - 1;



    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && (input[leftPointer] in vowels === false)) {
            leftPointer += 1
        }

        while (leftPointer < rightPointer && (input[rightPointer] in vowels === false)) {
            rightPointer -= 1
        }
    }

    reverse(letters, leftPointer, rightPointer); {
        leftPointer += 1;
        rightPointer -= 1;
    }




    return letters.join("")
}

function reverse(arr, i, j) {
    const temporaryValue = arr[i];
    arr[i] = arr[j];
    arr[j] = temporaryValue;

}


console.log(reverseVowels("input"))

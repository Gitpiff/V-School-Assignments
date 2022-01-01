let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"

// function forception() {
//     let newArray = []
//     let alph1 = alphabet.toUpperCase()
//     let newA= alph1.split("")
//     for(let i=0; i < people.length; i ++){
//         newArray.push(people[i] + ", " + newA);
//     }
//     return newArray
// }

 
// console.log(forception())

function forception(arr1, arr2) {
    let newArray = []
    // let alph1 = arrdos.toUpperCase()
    // let newA= alph1.split("")
    for(let i=0; i < arr1.length; i ++){
        for(let j= 0; j < arr2.length; j ++){
            // newArray2.push(alphabet[j]) 
        }
    }
    
    newArray.push(arruno[i] +  arrdos[j]);
    // return mainArray = newArray.concat(newArray2)
    return newArray
}

console.log(forception(people, alphabet))
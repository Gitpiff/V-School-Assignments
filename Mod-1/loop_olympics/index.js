
// 0 to 9
// for(i = 0; i <= 9; i ++) {
//     console.log(i)
// }

// 9 to 0
// for(i = 9; i >= 0; i --) {
//     console.log(i)
// }

// Print Array fruit
// const fruit = ["banana", "orange", "apple", "kiwi"]

// for(i = 0; i < fruit.length; i ++){
//     console.log(fruit[i])
// }

//Push 0 through 9 to an array
// function nums(num) {
//     let arr = [];
//     for(let i = 0; i <= num; i ++) {
//         arr.push(i);
//   }
//   return arr
// }


// console.log(nums(9))


//Print every other fruit
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// function frutas() {
//     let arr = []
//     for(let i = 0; i < fruit.length; i += 2){
//         arr.push(fruit[i])
    
//     }
// return arr
// }

// console.log(frutas())


//Print even numbers

// for(i = 0; i <= 100; i += 2) {
//     console.log(i)
// }


//Print all the names

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
//   function names() {
//       let arr = [];
//       for(i = 0; i < peopleArray.length; i ++){
//         arr.push(peopleArray[i].name)
//       }
//       return arr
      
//   }

//   console.log(names())

//Print Ocupations

  function ocupations() {
      let arr = [];
      for(i = 0; i < peopleArray.length; i ++){
        arr.push(peopleArray[i].occupation)
      }
      return arr
      
  }

  console.log(ocupations())

  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
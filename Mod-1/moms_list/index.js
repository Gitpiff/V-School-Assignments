// const form = document["addItem"]

// form.addEventListener("submit", function(event) {
//     event.preventDefault()
    
//     const item = form.title.value
//     form.title.value = ""
    
//     const newDiv = document.createElement("div")
//     newDiv.textContent = title.input;

//     const newEdit = document.createElement("button")
//     newEdit.textContent = "Edit"

//     const newX = document.createElement("button")
//     newX.textContent = "Delete"
//     newX.addEventListener("click", function(event) {
//         newItem.remove()
//     })

//     const newItem = document.createElement("li")
//     newItem.textContent = item
//     newItem.style.textAlign = "center"
    
//     document.getElementById("list").append(newItem)
//     newItem.append(newDiv)
//     newItem.append(newEdit)
//     newItem.append(newX)
    
    
// })




// const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let counter = 0;


// for(i = 0; i < officeItems.length; i ++) {
//      if(officeItems[i] === "computer") {
//          counter += 1
         
//      }
      
//     }
     
// console.log(counter)


//  var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

//   for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++) {
//       if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ) {
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see the movie")
//       } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough." + "She's can't watch the movie" )
//       }
//       else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is  old enough, HE can come in")
//       }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough." + "don't let him in")
//       }
//   }

// var tog = [2, 3, 2]

// for(i = 0; i < tog.length; i ++) {
//     if(tog[i] % 2 === 0) {
//         console.log("on")
//     }
// }


// function getRandom() {
//     const randomNum = Math.floor(Math.random() * 7 );
    
//     return randomNum
    
// }

// getRandom()


// function alertRandom(upper) {
//     const randomNum = Math.floor(Math.random() * upper);
//     return randomNum
    
// }

// console.log(alertRandom(7))

// function getArea(width, length, unit) {
//     const area = width * length;
//     return `${area} ${unit}`
// }

// console.log(getArea(3,5, "meters"))

// let random = (lower, upper) => {

    
// if(lower < upper) {
//     let lower1 = Math.floor(Math.random(lower) * 7 -1 + 1) + 1
//     return lower1
// } else {
//     return upper
// }

// }    

// console.log(random(4,5)) 

// function getRandom(upper) {
//    return Math.floor(Math.random() * upper) + 1
// }

// let counter = 0;
// while(counter < 1000){
//     console.log(`the number is ${getRandom(1000)}`);
//     counter += 1;
// }






// const attack = Math.floor(Math.random()*2)

// const enemies = ["Mama de Chachi", "Yeti", "Chupacabras"]

// function enemigos (arr1) {
//     let uno =""
//     for(let i = 0; i < arr1.length; i ++) {
//         if(i === attack && attack === 1) {
//             console.log("You've been attacked by the Mama de Chachi")
//         } else if(i === attack && attack === 2) {
//             console.log("You've been attacked by Yeti")
//         } else if(i === attack && attack === 3) {
//             console.log("You've been attacked by Chupacabras")
//         } else {
//             console.log("Keep walking")
//         }
//     }
//     return uno
// }

// console.log(enemigos(enemies))

// console.log(attack)

// let attack = 1


// function enemigos () {
//     if(attack === 1 || attack === 2 || attack === 3) {
//         let message = readlineSync.question("An enemy has appeared, would you like to fight [f] it or run [r]?", {limit: ["f", "r"]})
//         if(message === "f") {
//             fight()
//         }
// }else if(attack === 2) {
//     console.log("Sauron")
// } else if(attack === 3) {
//     console.log("Mama de Chachi")
// } else
// console.log("walking")
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

//   console.log(getRandomInt(0,100))


// function randomDamage () {
//     let damage = Math.floor(Math.random() * (50) + 50);
//     return damage + " points were taken from your HP!"
//  }

//  console.log(randomDamage())

//  const enemies = [ "Mama de Chachi", "Yeti", "Sauron"]

// function ataque (arr1) {
//     let att = Math.floor(Math.random()*3)
//     let result = ""
//     for(let i =0; i < arr1.length; i ++){
//          if(att === i && i === 0) {
//             console.log(`${enemies[i]} has attacked you!! `)
//         } else if(att === i && i === 1) {
//             console.log(`${enemies[i]} has attacked you!! `)
//         } else if(att === i && i === 2) {
//             console.log(`${enemies[i]} has attacked you!! `)
//         }
//     }
//     return result

// }

// console.log(ataque(enemies))

//  const enemies = [ "Mama de Chachi", "Yeti", "Sauron"]

// function run (arr1) {
//     const attack = Math.floor(Math.random()*1)
        
//     if(attack === 1) {
//         console.log("run forest, run!!")
//     } else if(attack === 0) {
//         let att = Math.floor(Math.random()* 1)
//         if(att === 0) {
//             console.log(`your cardio is not good enough, ${enemies.values(0)} has killed you`)
//         }
            
            
//     }
    
// }

// console.log(run(enemies))


// let winner = 0;


// function win () {
//     exit = ""
//     while(winner < 10) {
//         camino = 10 - (winner += 2) 
//         console.log(`Lucky! Keep walking, you only have ${camino}`)
//     }
//     if( camino === 0) {
//         console.log("You are out!!")
//     }
//     return exit
        
    
// }

// console.log(win())


// let attack = Math.floor(Math.random()*1)

// function uno() {
//     let message = ""
//     if(attack === 0) {
//         message = readlineSync.question("Looks like it's safe to keep walking, to keep walking press [w] to check inventory check [i]", {limit: ["w", "i"]})
//     } else {
//         console.log("numero")
//     } return message
// }


// console.log(attack)

// const enemies = [ "Mama de Chachi", "Yeti", "Sauron"]
// let random = Math.random(enemies)

// let userAttack = Math.floor(Math.random()*20 + 50);
// let enemyDamage = 0;
// let attacked = ""
// let att = Math.floor(Math.random()*2)

// function ataque (arr1) {
//     do {
//         for(let i =0; i < arr1.length; i ++){
//             if(att === i && i === 0 || att === i && i === 1 || att === i && i === 2) {
//                 enemyDamage += userAttack
//             //    console.log(`Your attack has taken ${userAttack} HP from ${enemies[i]}!`)
//             }
//        }
//        return enemyDamage
//     }
//     while (enemyDamage < 100)
    
// }

// console.log(ataque(enemies))


// const enemies = [ "Mama de Chachi", "Yeti", "Sauron"]

// function ataque (arr1) {
//     for(let i =0; i < arr1.length; i ++){
//          if(att === i && i === 0 || att === i && i === 1 || att === i && i === 2) {
//             console.log(`Your attack has taken ${userAttack} HP from ${enemies[i]}!`)
//          }
         
//     }
//     return attacked


// let userAttack = 0;
// let enemyDamage = 1;
// let enemyHp = 100;


// for( enemyDamage; enemyDamage < enemyHp; enemyDamage++) {
//     userAttack = userAttack + enemyDamage

// }

// console.log(userAttack)


// do {
//     let userAttack = Math.floor(Math.random()*10);
//     enemyDamage.push(userAttack);
//     i++;
// }
// while (i <3)

// console.log(enemyDamage)


// let att = Math.floor(Math.random()*2)

// do {
//     readlineSync.question("To walk [w] or check your inventory [i]?", {limit: ["w", "i"]})
// } while (att === 0 && walkOrInventory === "w")
// let names = []

// function enemy(name, hp, attack) {
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
// }

// let en1 = new enemy("Yeti", 100, 50);
// let en2 = new enemy("Sauron", 100, 70);
// let en3 = new enemy("Gollum", 70, 30);

// names.push(en1.name)
// names.push(en2.name)
// names.push(en3.name)

// const nombres = Math.floor(Math.random() * names.length)

// console.log(names[nombres])


//greeting
//ask player's name & store it
//if user enter w  r fx walking run 
// if p runs 50% dies
// 1/4 chances of being attacked
// a r
// a fx attack hp enemys hp
//
// if user enter 

//walk fx, attack fx 

//while p isAlive keep walking
//walk 

// function getPlayerInput () {

// readlineSync.question("Looks like it's safe to keep walking, to keep walking press [w] to check inventory check [i]", {limit: ["w", "i"]})


// }

//game fx loop getPla fx as long as p is Alive
// do getP while isAlive true

// let userAttack = Math.floor(Math.random()*20 + 50)
// function character(name, hp, attack) {
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
// }

// let en1 = new character("Yeti", 100, 50);
// let en2 = new character("Sauron", 100, 70);
// let en3 = new character("Gollum", 70, 30);
// let ply = new character(`player`, 100, 50)

// characters.push(en1.name)
// characters.push(en2.name)
// characters.push(en3.name)


// function ataque () {
//     let damage = 0;
//     do { damage += userAttack
//             readlineSync.question(`Your attack has taken ${userAttack} HP from ${characters[nombres]}, it still has ${en1.hp - userAttack} hp!`)
//             console.log(enemyAttack())
//         } while ( damage < 100) 
//     }

// let uno = 0;
// let hp = 100;
// let damage = Math.floor(Math.random()*50)

// function battle() {
//     for(uno; uno < hp; uno ++){
//         dos = hp - damage
//         uno += dos
//     }
    
//     if(uno === 0) {
//         console.log("cero")
//     }
//     return uno
// }

// console.log(battle())



const enemies = [ "Mama de Chachi", "Yeti", "Sauron"]

let randene = Math.floor(Math.random()* enemies.length)

console.log(enemies[randene])
    
   

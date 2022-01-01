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


// // greeting
// // ask player's name & store it
// // if user enter w  r fx walking run 
// // if p runs 50% dies
// // 1/4 chances of being attacked
// // a r
// // a fx attack hp enemys hp

// // if user enter 

// // walk fx, attack fx 

// // while p isAlive keep walking
// // walk 

// // function getPlayerInput () {

// // readlineSync.question("Looks like it's safe to keep walking, to keep walking press [w] to check inventory check [i]", {limit: ["w", "i"]})


// // }

// // game fx loop getPla fx as long as p is Alive
// // do getP while isAlive true

// // let userAttack = Math.floor(Math.random()*20 + 50)
// // function character(name, hp, attack) {
// //     this.name = name;
// //     this.hp = hp;
// //     this.attack = attack;
// // }

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



// const enemies = [ "Mama de Chachi", "Yeti", "Sauron"]

// let randene = Math.floor(Math.random()* enemies.length)

// console.log(enemies[randene])
    
          




// var canVisitAllRooms = function(rooms) {
//     const keys = rooms[0]; //keys of unvisted rooms
//     let set = new Set();  // collection of unique keys of visited rooms
//      while(keys[keys.length-1]){
//          let key = keys.pop(); // pop from univisted keys
//          set.add(key); //  put in visted set
//          for(let k of rooms[key]){
//              if(!set.has(k)){   //if the key is not in visted set
//                  keys.push(k); //push it in keys to visit set
//              }
//          }
//      }
//      return set.size == rooms.length-1; // not considering 0 
//   };

// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))


// function checkIllumination(N, lamps, queries) {
//     let r= {};
//     let c= {};
//     let d1 = {};
//     let d2 = {};
//     let set = new Set();
//     for(let [x,y] of lamps) {
//         r[x] = (r[x] || 0) +1;
//         c[y] = (c[y] || 0) +1;
//         d1[x+y] = (d1[x+y] || 0) +1;
//         d2[x-y] = (d2[x-y] || 0) +1;
//         let key = x + " - " + y
//         set.add(key)
    
//     }

//     let result = [];
//     for(let [x,y] of queries) {
//         if(r[x] > 0 || c[y] > 0 || d1[x+y] > 0 || d2[x-y] > 0){
//             result.push("on");
            
//             for(let i = -1; i <= 1; i++){
//                 for(let j = -1; j <= 1; j++){
//                     let x1 = x+ i;
//                     let y1 = y + y;
//                     let key = x + " - " + y;
//                     if(set.has(key)){
//                         set.delete(key);
//                         r[x1] --;
//                         c[y1] --;
//                         d1[x1 + y1] --;
//                         d2[x1 - y1] --;
//                     }
//                 }
//             }
//         } else {
//             result.push("off")
//         }
//         return result;
//     }
    
// }

// console.log(checkIllumination(8, [[4,3], [4,4]],[[3,4],[7,6]]))

// class enemy {
//     constructor(name, hp, attack) {
//         this.name = name,
//         this.hp = hp,
//         this.attack = attack
//     }
// }

// //Create new enemies

// const enemy1 = new enemy("Mama de Chachi", 200, 15);
// const enemy2 = new enemy("Sauron", 200, 40);
// const enemy3 = new enemy("Pablo Escobar", 200, 70);

// const enemies = [enemy1, enemy2, enemy3];

// // let attack = Math.floor(Math.random()* enemies.attack);
// let randomEnemies = Math.floor(Math.random()* enemies.length);

// // console.log(attack)\

// //Hold the value of the attacks

// //while loop

// let counter = 1;

// let enemyAttack = function(counter){
    
//     let damage = Math.floor(Math.random() * 10);
//     for(let i = 0; i < 100; i++) {

//     }
//     counter += damage;
    
    

//     // if(damage > 15 && damage < 50 && damage != 0 ) {
//     //     counter += damage
//     // }

//     //  return counter

//     return counter
// }

// console.log(enemyAttack())


// while(user.hp > 0 && currEnemy.hp > 0) {



// }




//Fight Function
const user = {

    name: "toby",
    hp: 100,
    inventory: ['sword', "knife", "gun"],
    attack: 50,
}

class enemy {
    constructor(name, hp, attack) {
        this.name = name,
        this.hp = hp,
        this.attack = attack
    }
}

// let salida = function(user) {
//     let user.hp = 100;
//     let counter = 0;
//     while(user.hp <= 100 && user.hp > 0){
//         let damage = Math.floor(Math.random()* 10);
//        counter =  user.hp - damage
//     }
//     return counter
// }



//user attacks enemy, enemy loses hp
const enemy1 = new enemy("Yeti", 200, 15);
const enemy2 = new enemy("Sauron", 200, 40);
const enemy3 = new enemy("Pablo Escobar", 200, 70);

const enemies = [enemy1, enemy2, enemy3];

let randomEnemies = Math.floor(Math.random()* enemies.length);

let enemyX = enemies[randomEnemies];

let currEnemyHp = enemyX.hp - user.attack

let randomWeapon = Math.floor(Math.random()* user.inventory.length);

// let enemyXhP = enemies[randomEnemies].hp;

// let userAttack = function(enemyX) {
    
//     let damage = Math.floor(Math.random() * 10);
//     let result = enemyX.hp - damage;
//     return result
// }

console.log(enemyX.name)


//enemy attack
let enemyAttack = function(){

    let damage = Math.floor(Math.random()* enemies[randomEnemies].attack);


     return user.hp - damage
}


let fight = function() {
    let weapon = readlineSync.question(`this is your weapon ${}`)
}
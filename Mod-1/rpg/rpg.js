const readlineSync = require('readline-sync');

// Global variables

let userName = readlineSync.question("May I have your name? ")

let isPlayerAlive = true;

const user = {

    name: userName,
    hp: 100,
    inventory: ['sword', "knife", "gun"],
    attack: 50,
}

class Enemy {
    constructor(name, hp, attack) {
        this.name = name,
        this.hp = hp,
        this.attack = attack
    }
}

//Create new enemies

const enemy1 = new Enemy("Yeti", 200, 15);
const enemy2 = new Enemy("Sauron", 200, 40);
const enemy3 = new Enemy("Pablo Escobar", 200, 70);

const enemies = [enemy1, enemy2, enemy3];

let randomIndex = Math.floor(Math.random() * enemies.length);
let randomEnemy = enemies[randomIndex];

// fight function

const fight = function (randomEnemy) { 
    /* 
        enemy = { 
            name: "Yeti"
            hp: 100, 
            attack: 70
        }
    */
    let randomWeapon = Math.floor(Math.random()* user.inventory.length);
    let userWeapon = user.inventory[randomWeapon];

    


    while(user.hp > 0 && randomEnemy.hp > 0) {
        //current user hp
        user.hp = user.hp - randomEnemy.attack;

        // current randomEnemy hp
        randomEnemy.hp = randomEnemy.hp - user.attack;

        console.log(`you have attacked ${randomEnemy.name} with your ${userWeapon}, and have taken ${user.attack} points!`)
        console.log(`${randomEnemy.name} has now ${currrandomEnemyHp}`)

        // console.log the randomEnemy has attacked the user 

    }
    // check to see who is alive and what to do with that info 
    if (randomEnemy.hp <= 0) { 
        // do something
        // cosnole.log that the enemy has died
    }
    if (user.hp <=0)  { 
        // update the isPlayerActive variable 
        // print a message to the user letting them know they died 
    }
}


//Game starts

while(isPlayerAlive) {
    
    console.log("What would you like to do?")

    const input = readlineSync.keyIn( "To walk press 'w', To check your inventory press 'i', To quit press 'q'", {limit: 'wiq'})


    if(input === "w") {
    //walking 1/3 chance of being attacked
        let random = Math.floor(Math.random() * 3) + 1; 
        
        //encounter a random enemy / fight or run
        if(random === 2 ) {
            //random enemy generator
            // let randomEnemiesIndex = Math.floor(Math.random()* enemies.length);

            // //current enemy
            // let randomEnemy
            // let enemyXname = enemies[randomEnemiesIndex].name;

            
            console.log(`You have encountered ${enemyXname}`);
            const fightOrRun = readlineSync.keyIn("would you like to fight 'f' it or run 'r'?", {limit: ['fr']});
            
            //fight function
            if(fightOrRun === "f") {
                
                /*
                    enemyX = {
                        name: "Yeti", 
                        hp: 100, 
                        attack: 70
                    }
                */
                fight(randomEnemy) // 
 
            
            //run function 50% chance of escaping
            }else{
                let att = Math.floor(Math.random()*2)
                if(att === 1){
                    console.log("You have succesfully escaped!")
                } else{
                    console.log(`${enemyXname} was faster than you and has attacked you`);
                    console.log(`Now you have ${currUserHp} health points, ${enemyXname} took ${enemyX.attack} health points`);
                    while(currUserHp > 0 && currEnemyHp > 0){
                        //keep track of the hp of both the user and the enemy
                        const fightOrRun = readlineSync.keyIn("would you like to fight 'f' it or run 'r'?", {limit: ['fr']});
                    }

                    
                }
                
            }
            
        } else {

        } 




    } else if(input === "i") {
        //inventory
        console.log(user.inventory)
    } else if(input === "q") {
        // exit game
        isPlayerAlive = false;
        console.log("Game Over, Thank you for playing")
    }
}





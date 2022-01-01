const readlineSync = require('readline-sync');

//Greeting, get player's name
readlineSync.question("Welcome to Colossal Adventure! ")
let userName = readlineSync.question("May I have your name? ")  //Get player's name
readlineSync.question("The only way out is fighting, but you can try to run.. ")
let input = readlineSync.keyIn(`Would you like to run [r], walk [w], check your inventory [i], or quit [q]? `, { limit: "rwiq" })

// Global variables
let isPlayerAlive = true;


//user object
const user = {

    name: userName,
    hp: 100,
    inventory: ['sword', "knife", "gun"],
    attack: 30,
}

let userdamage = user.attack; //user damage


//enemy class
class Enemy {
    constructor(name, hp, attack) {
        this.name = name,
            this.hp = hp,
            this.attack = attack
    }
}

const enemy1 = new Enemy("Yeti", 100, 15);
const enemy2 = new Enemy("Sauron", 100, 40);
const enemy3 = new Enemy("Pablo Escobar", 100, 50);

let enemies = [enemy1, enemy2, enemy3];

let randomIndex = Math.floor(Math.random() * enemies.length);
let randomEnemy = enemies[randomIndex]; //random enemy
let enemyDamage = randomEnemy[attack];


//enemy attack function
function enemyAttack() {
    let enemyDamage = Math.floor(Math.random() + 1) * 15;
    user.hp -= enemyDamage;
    console.log(`Now ${randomEnemy.name} has attacked you! His attack took ${enemyDamage} hp from you!`);
    if (user.hp <= 0 && randomEnemy.hp > 0) {
        console.log(`${userName} ${randomEnemy.name} has killed you...`)
        quit()
    } else if (randomEnemy.hp <= 0 && user.hp > 0) {



        console.log(enemies)
        console.log(`${userName} good job! You have killed ${randomEnemy.name}! `);
        console.log(`Killing ${randomEnemy.name} has awarded you ${randomEnemy.hp / 5} health points!`);
        let next = readlineSync.keyIn(`To keep walking press [w], to run [r], to check your inventory [i] `, { limit: "rwi" });
        if (next === "r") {
            run()
        } else if (next === "w") {
            walk()
        } else if (next === "i") {
            inventory()
        }
    }

    while (randomEnemy.hp > 0 && user.hp > 0) {
        console.log(`Now you have ${user.hp} health points!`);
        console.log(`${randomEnemy.name} has ${randomEnemy.hp} health points!`)
        let next = readlineSync.keyIn(`To fight back press [f] to run [r], to walk [w], to check your inventory [i] `, { limit: "frwi" });
        if (next === "f") {
            attack()
        } else if (next === "r") {
            run()
        } else if (next === "w") {
            walk()
        } else if (next === "i") {
            inventory()
        }
    }



}

function isdeadoralive() {

    if (randomEnemy.hp < 0 && user.hp > 0) {
        console.log(`${userName} good job! You have killed ${randomEnemy.name}! `);
        let reward = Math.floor(Math.random() * 50) + 1;
        user.hp += reward;
        console.log(`Killing ${randomEnemy.name} has awarded you ${reward} health points!`);
        let next = readlineSync.keyIn(`To keep walking [w], to check your inventory [i], to run [r] or to quit [q] `, { limit: "rwiq" });
        if (next === "f") {
            attack()
        } else if (next === "r") {
            run()
        } else if (next === "w") {
            walk()
        } else if (next === "i") {
            inventory()
        } else if (next === "q") {
            quit()
        }


    }
}

//user attack function
function attack() {
    while (user.hp > 0 && randomEnemy.hp > 0) {
        //    user.hp = enemyDamage - user.hp;
        randomEnemy.hp -= userdamage;

        let playersWeapon = readlineSync.keyIn(`${userName} pick your weapon! Sword [s], Gun [g], Axe [a] `, { limit: "sga" });
        if (playersWeapon === "s") {
            let swordDamage = user.attack + 15;
            let userdamage = swordDamage;
            console.log(`Excellent choice!, you've taken ${userdamage} hp from ${randomEnemy.name}! `);
            if (randomEnemy.hp > 0 && user.hp > 0) {
                console.log(`${randomEnemy.name} has now ${randomEnemy.hp}`);
                enemyAttack()
            } else if (randomEnemy.hp < 0 && user.hp > 0) {
                isdeadoralive()
            } else if (user.hp < 0 && randomEnemy.hp > 0) {
                console.log(`${userName} ${randomEnemy.name} has killed you...`);
                quit()
            }


        } else if (playersWeapon === "g") {
            let gunDamage = user.attack + 10;
            let userdamage = gunDamage;
            console.log(`Excellent choice!, you've taken ${userdamage} hp from ${randomEnemy.name}! `);
            if (randomEnemy.hp > 0 && user.hp > 0) {
                console.log(`${randomEnemy.name} has now ${randomEnemy.hp}`);
                enemyAttack()
            } else if (randomEnemy.hp < 0 && user.hp > 0) {
                isdeadoralive()
            } else if (user.hp < 0 && randomEnemy.hp > 0) {
                console.log(`${userName} ${randomEnemy.name} has killed you...`);
                quit()
            }
        } else {
            let axeDamage = user.attack + 10;
            let userdamage = axeDamage;
            console.log(`Excellent choice!, you've taken ${userdamage} hp from ${randomEnemy.name}! `);
            if (randomEnemy.hp > 0 && user.hp > 0) {
                console.log(`${randomEnemy.name} has now ${randomEnemy.hp}`);
                enemyAttack()
            } else if (randomEnemy.hp < 0 && user.hp > 0) {
                isdeadoralive()
            } else if (user.hp < 0 && randomEnemy.hp > 0) {
                console.log(`${userName} ${randomEnemy.name} has killed you...`);
                quit()
            }
        }

    }



}


//walk function
function walk() {
    console.log("Walking is not as safe as you think.. you could encounter an enemy anytime, keep your eyes open! ")
    let chanceOfBeingAttacked = Math.floor(Math.random() * 3) + 1;
    if (chanceOfBeingAttacked === 1 || chanceOfBeingAttacked === 2) {
        console.log(`${userName} the path seems to be clear..for now`);
        let next = readlineSync.keyIn(`Would you like to run [r], walk [w], check your inventory [i], or quit [q]? `, { limit: "rwiq" });
        if (next === "r") {
            run()
        } else if (next === "w") {
            walk()
        } else if (next === "i") {
            console.log(user.inventory)
        } else if (next === "q") {
            quit()
        }
    } else if (chanceOfBeingAttacked === 3) {

        let fightOrRun = readlineSync.keyIn(`${randomEnemy.name} is here! What will you do? Fight [f] or will you try to run [r]? `, { limit: "fr" });

        if (fightOrRun === "f") {
            attack()
        } else {
            run()
        }

    }

}


// run function
function run() {
    console.log("So you've decided to run..");
    let chanceOfEscaping = Math.floor(Math.random() * 2) + 1;
    if (chanceOfEscaping === 1) {
        console.log(`${userName} you were lucky this time, you have escaped! `);
        //readlinesync if they choose run walk() again
        let next = readlineSync.keyIn(`Would you like to run [r], walk [w], check your inventory [i], or quit [q]? `, { limit: "rwiq" });
        if (next === "r") {
            run()
        } else if (next === "w") {
            walk()
        } else if (next === "i") {
            inventory();
        } else if (next === "q") {
            quit();
        }
    } else if (chanceOfEscaping === 2) {
        let randomIndex = Math.floor(Math.random() * enemies.length);
        let randomEnemy = enemies[randomIndex];
        console.log("Running is never the answer!");
        enemyAttack();
        attack();
    }
}

function quit() {
    console.log("Thank you for playing, Game Over!");
    isPlayerAlive = false;

}


function inventory() {
    console.log(`Name; ${userName} -  Weapons; ${user.inventory} -  You currently have ${user.hp} health points`)
    if (user.hp > 0) {
        let next = readlineSync.keyIn(`Would you like to keep walking [w], or will you try to run [r]? `, { limit: "rw" });
        if (next === "r") {
            run()
        } else if (next === "w") {
            walk()
        }

    }
}

//Game Starts


while (isPlayerAlive) {
    if (input === "w") {
        while (user.hp > 0) {
            walk()
        }


    } else if (input === "r") {
        while (user.hp > 0) {
            run()
        }

    } else if (input === "i") {

        inventory()
    } else if (input === "q") {
        quit()
    }
}




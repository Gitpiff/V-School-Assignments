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

const enemy1 = new enemy("Yeti", 200, 15);
const enemy2 = new enemy("Sauron", 200, 40);
const enemy3 = new enemy("Pablo Escobar", 200, 70);

const enemies = [enemy1, enemy2, enemy3];

// let randomWeapon = Math.floor(Math.random()* user.inventory.length);
// let userWeapon = user.inventory[randomWeapon];


let randomEnemy = Math.floor(Math.random()* user.inventory.length);
let enemyX = enemies[randomEnemy];


const fight = function (user, enemyX) { 
    /* 
        enemy = { 
            name: "Yeti"
            hp: 100, 
            attack: 70
        }
    */
    let randomWeapon = (Math.floor(Math.random())) * user.inventory.length;
    let userWeapon = user.inventory[randomWeapon];

    


    while(user.p > 0 && enemyX.hp > 0) {
        //current user hp
        user.hp = user.hp - enemyX.attack;

        // current enemyX hp
        enemyX.hp = enemyX.hp - user.attack;

        console.log(`you have attacked ${enemyX.name} with your ${userWeapon}, and have taken ${user.attack} points!`)
        console.log(`${enemyX.name} has now ${currEnemyHp}`)

        // console.log the enemyX has attacked the user 

    }
    // check to see who is alive and what to do with that info 
    if (enemyX.hp <= 0) { 
        // do something
        // cosnole.log that the enemyX has died
        console.log("enemyX's dead")
    }
    if (user.hp <=0)  { 
        // update the isPlayerActive variable 
        // print a message to the user letting them know they died 
        console.log("enemyX's dead")
    }
}

console.log(fight())
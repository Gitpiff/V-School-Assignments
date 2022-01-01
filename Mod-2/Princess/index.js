// let statusArr = ["Dead", "Small", "Big", "Powered Up"];


class Player {
    constructor(name, status = ["Dead", "Small", "Big", "Powered Up"], totalCoins = 0, hasStar = false, gameActive = true) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;

    }
    setName(namePicked) {
        namePicked = "Luigi";
        return namePicked
    }

    gotHit() {
        //called when a hit is received - num 0 -
        //starts from powered up, big, small, dead
        if (this.status === "Powered Up") {
            this.status === "Big";
        } else if (this.status === "Big") {
            this.status === "Small";
        } else if (this.status === "Small" && this.hasStar) {
            this.hasStar = false;
            console.log("Your star has saved you!");
        } else if (this.status === "Small" && !this.hasStar) {
            this.gameOver()
        }
    }
    //each hit moves the value down by 1
    //remove a star each time the player reaches the dead value, print "Your star has saved you!"
    //if no stars, player is dead
    //if dead, change gameActive boolean to false




    gotPowerup() {
        //called when a power up is received - num 1 -
        //status goes from small to big, to powered up
        //if powered up and hits this fx, get a star
        //display message "Congratulations, you got a Star!"
        if (this.status === "Powered Up") {
            this.hasStar = true;

        } else if (this.status === "Big") {
            this.status === "Powered Up";
        }
        if (this.status === "Small") {
            this.status === "Big";

        }


    }

    addCoin() {
        //when called add 1 coin to the totalCoins var - num 2 -
        this.totalCoins++;
        return this.totalCoins;
    }

    print() {

        //print the name, coins, status and star properties
        //make it a multiline - use \n -
        // console.log(`${this.setName} \n${this.status} \n${this.totalCoins}`)
        console.log(`Name: ${this.setName()}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
        if (this.hasStar) {
            console.log("Congratulations, you got a Star!")
        }

    }

    gameOver() {
        this.gameActive = false;
        console.log("Game Over");
        clearInterval(intervalID);

    }


}


//Generate random num if 0 call hit() if 1 gotPowerup() if 2 addCoin()
// function randomNum() {
//     let num = Math.floor(Math.random() * 3)

//     if (num === 0) {
//         return newPlayer.gotHit()
//     } else if (num === 1) {
//         return newPlayer.gotPowerup()
//     } else {
//         return newPlayer.addCoin()
//     }
// }

//Create New Player
const newPlayer = new Player("Luigi", "Small", 0);

//setInterval & clearInterval
// function randomNum() {
//     let num = Math.floor(Math.random() * 3)

//     if (num === 0) {
//         return newPlayer.gotHit()
//     }
//     if (num === 1) {
//         return newPlayer.gotPowerup()
//     }
//     if (num === 2) {
//         return newPlayer.addCoin()
//     }
// }


let intervalID = setInterval(() => {
    newPlayer.print();

    let num = Math.floor(Math.random() * 3)

    if (num === 0) {
        return newPlayer.gotHit()
    } else if (num === 1) {
        return newPlayer.gotPowerup()
    } else {
        return newPlayer.addCoin()
    }






}, 1000)

console.log(newPlayer)



// addCoin(){ this.totalCoins++ }

// print(){
//     console.log(`\n Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`);
//     if (this.hasStar) console.log("You have a Star!");
// }

// endGame(){
//     this.gameActive = false;
//     console.log("\n Game Over :( \n");
//     clearInterval(timer);
// }
// }

// let player = new Player(0, "Big", false);
// player.setName("Luigi");

// let timer = setInterval(() => {
//     player.print();
//     let randomEvent = Math.floor((Math.random() * 3));
//     console.log(`Random Event(s): ${randomEvent}`)
//     if (randomEvent === 0) {
//         player.gotHit();
//     } else if (randomEvent === 1) {
//         player.gotPowerUp();
//     } else player.addCoin();
// }, 1000);



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
        } else if (this.status === "Small" && this.hasStar === true) {
            this.hasStar = false;
            console.log("Your star has saved you!");
        } else if (this.status === "Small" && this.hasStar === false && this.totalCoins <= 0) {
            this.status === "Dead";
            this.gameActive === false;
        }
        //each hit moves the value down by 1
        //remove a star each time the player reaches the dead value, print "Your star has saved you!"
        //if no stars, player is dead
        //if dead, change gameActive boolean to false


    }

    gotPowerup() {
        //called when a power up is received - num 1 -
        //status goes from small to big, to powered up
        //if powered up and hits this fx, get a star
        //display message "Congratulations, you got a Star!"
        if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("Congratulations, you got a Star!");
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

    }





    //Generate random num if 0 call hit() if 1 gotPowerup() if 2 addCoin()
}



//Create New Player
const newPlayer = new Player("Luigi", "Small", 0);


let intervalID = setInterval(() => {
    newPlayer.print()
    let num = Math.floor(Math.random() * 3)

    if (num === 0) {
        newPlayer.gotHit()
    }
    if (num === 1) {
        newPlayer.gotPowerup()
    }
    if (num === 2) {
        newPlayer.addCoin()
    }


    if (newPlayer.gameActive === false) {
        clearInterval(intervalID)
    }

}, 1000)




// console.log(newPlayer)node

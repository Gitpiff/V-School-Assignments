let randomLoc = Math.floor(Math.random() * 5);

let loc1 = randomLoc;
let loc2 = randomLoc + 1;
let loc3 = randomLoc + 2;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready?! (enter a number from 0 to 7)");
  if (guess < 0 || guess > 7) {
    //Check the validity of the input//
    alert("Please enter a valid number"); //If the input is not valid, we''ll display this message//3
  } else {
    guesses = guesses + 1; //If the input is valid, we'll add one guess so we can keep track of how
    // many guesses the user has generated//
    if (guess == loc1 || guess == loc2 || guess == loc3) {
      alert("Hit!!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship");
      }
    } else {
      alert("Miss!!");
    }
  }
}

let stats = `you took ${guesses} guesses to sink the battleship, which means your accuracy was ${
  3 / guesses
}`;
alert(stats);

// let i = 10;

// while (i > 0) {
//   i = i - 1;
//   if (i <= 10) {
//     console.log(i + ` botellas of beer left`);
//   } else {
//     console.log("no mas cerveza");
//   }
// }


// function bark(name, weight) {
//   if (weight > 20) {
//     console.log(`${name} says WOOF`);
//   } else {
//     console.log(`${name}says woof`);
//   }
// }

// bark("chance", 0, 0);

// function whatShallIWear(temperature) {
//   if (temperature < 60) {
//     console.log("Jacket");
//   } else if (temperature < 70) {
//     console.log("Sweater");
//   } else {
//     console.log("T-shirt");
//   }
// }

// whatShallIWear(90);
// whatShallIWear(10);
// whatShallIWear(65);
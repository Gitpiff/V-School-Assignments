//Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
    return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))



//Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"])



console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"])
)




//Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {
    location: "Burly Idaho",
    duration: "8 weeks"
};

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${vacation.location} for ${vacation.duration}`
}

console.log(parseSentence(vacation))



//Use destructuring to make this code ES6:

function returnFirst(items) {
    items[0]; /*change this line to be es6*/
    return items
}

console.log(returnFirst("uno", "dos"))



//Write destructuring code to assign variables that will help us return the expected string.
//Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    /*your code here*/
    firstFav = arr[0];
    secondFav = arr[1];
    thirdFav = arr[2];
    return `My top three favorite activities are, "${firstFav}", "${secondFav}", and "${thirdFav}'`;
}

returnFavorites(favoriteActivities)

console.log(returnFavorites(favoriteActivities))




//Use the Rest and Spread Operator to help take any number of arrays, and return one array.
//You will need to change how the arrays are passed in. You may write it assuming you will always
//recieve three arrays if you would like to.

function combineAnimals(arr1, arr2, arr3) {
    let one = [...arr1, ...arr2, ...arr3]
    return one
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))




//Try to make the following function more ES6xy:

function product(a, b, c, d, e) {
    let numbers = [a, b, c, d, e];
    return numbers.reduce((acc, number) => {
        return acc * number;
    }, 1)
}


console.log(product(1, 2, 3, 4, 5))

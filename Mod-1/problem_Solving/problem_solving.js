const nums = [3,7,9,5,9,7,90]

// console.log(Math.max(...nums))

//Store a function inside of a Variable
const largestNum = (values) => {
//Set a new variable that will store the result of the logic
    let large = 0;

//Iteraate through the values of the array using a for loop
    for (let i = 0; i < values.length; i ++) {

/*Check a condition, using if. In this case variable "large" is equal to 0, so if values[i] is greater than 0
which most likely will be, then apply the changes of line 19 */

        if (values[i] > large) {

//If condition is true, replace the value of "large" wich is set to 0, with the new value.
            large = values[i];
        }
    }

//Finally return the result of the function's logic, stored in the "large" variable.
    return large
}

console.log(largestNum(nums))










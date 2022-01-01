//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y) {
    // check data types first and throw error
    try {
        if (isNaN(x) || isNaN(y)) {
            throw "Not a Number"
        } else if (Number(x) || Number(y)) {
            x + y;
        }
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log("It works!")
    }



    return x + y

}


console.log(sum("whale", 8))



//2a) Given a user object, write a function called login that takes a username and password as parameters.
//Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };
function login(username, password) {
    //check credentials


    try {
        if (username === user.username && password === user.password) {
            console.log("login successful!")
        } else {

            throw "We can't validate your credentials, try again"
        }
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log("work")
    }

}


login("Sam", "123abc")



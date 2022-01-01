let h1 = document.createElement("h1")
h1.textContent = "JavaScript made this"
h1.style.textAlign = "center"
h1.style.fontSize = "70px"
document.getElementById("header").appendChild(h1)


let newp = document.createElement("newp");
newp.innerHTML =  '<span>Victor</span> wrote the JavaScript';
newp.style.fontSize = "40px"
newp.style.textAlign = "center"
document.getElementById("header").appendChild(newp)

let messages = document.getElementsByClassName("message")
messages[0].textContent = "Let's go get some food";
messages[1].textContent = "Okay, what would you like?";
messages[2].textContent = "Okay, what would you like?";
messages[3].textContent = "Idk, you pick";

let clear = document.getElementById("clear-button");
clear.onclick = function () {
    myFunction()
};

function myFunction() {
    let messages = document.getElementsByClassName("message");
    messages[0].textContent = "";
    messages[1].textContent = "";
    messages[2].textContent = "";
    messages[3].textContent = "";

}

let options = document.getElementById("theme-drop-down")

options.addEventListener("change", function() {

    if (options.value === "theme-one") {
        console.log("blue/brown")
        let leftmessages = document.getElementsByClassName("left")
        console.log(leftmessages)
        leftmessages[0].style.backgroundColor = "blue"
    
    } else if (options.value === "theme-two") {
        console.log("red/black")
    }
}) 
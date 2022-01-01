
const countBtn = document.querySelector(".counter button");
const total = document.createElement("h2");

// const total = 0;

// countBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     total++;
//     JSON.stringify(total);

//     localStorage.setItem("clicks", total)
// })

// const clicks = localStorage.getItem(clicks);
// const final = document.createElement("h2");
// final.textContent = clicks


countBtn.addEventListener("click", up);

function up() {

    total++;
    h2.textContent = total;
    JSON.stringify(total)
    localStorage.setItem("clicks", total)

}


const totalClicks = localStorage.getItem("clicks");


document.getElementsByTagName("body")[0].append(totalClicks)



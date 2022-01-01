const suma = document["add"]

suma.addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = Number(suma.num1.value);
    const num2 = Number(suma.num2.value);

    const result = document.createElement("h1");

    result.textContent = num1 + num2;

    document.getElementsByTagName("body")[0].append(result)
})

const resta = document["sub"]

resta.addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = Number(resta.num1.value);
    const num2 = Number(resta.num2.value);

    const result = document.createElement("h1");

    result.textContent = num1 - num2;

    document.getElementsByTagName("body")[0].append(result)
})

const times = document["mul"]

times.addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = Number(times.num1.value);
    const num2 = Number(times.num2.value);

    const result = document.createElement("h1");

    result.textContent = num1 * num2;

    document.getElementsByTagName("body")[0].append(result)
})

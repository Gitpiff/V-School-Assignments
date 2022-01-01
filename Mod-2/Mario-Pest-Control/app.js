const invoice = document["form"]

invoice.addEventListener("submit", function (event) {
    event.preventDefault()

    const value1 = Number(invoice.goom.value) * 5;
    const value2 = Number(invoice.chep.value) * 11;
    const value3 = Number(invoice.bob.value) * 7;

    const result = document.createElement("h2");

    result.textContent = value1 + value2 + value3;



    document.getElementsByName("form")[0].append(result)
})






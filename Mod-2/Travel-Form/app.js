const avion = document["aero"]

avion.addEventListener("submit", function (event) {
    event.preventDefault()

    const firstName = avion.firstName.value;
    const lastName = avion.lastName.value;
    const age = avion.age.value;
    const genderCheck = [];
    const location = avion.location.value;
    const diet = [];

    for (let i = 0; i < avion.gender.length; i++) {
        if (avion.gender[i].checked) {
            genderCheck.push(avion.gender[i].value)
        }
    }

    for (let i = 0; i < avion.diet.length; i++) {
        if (avion.diet[i].checked) {
            diet.push(avion.diet[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName
        + "\nAge: " + age + "\nGender: " + genderCheck + "\nLocation: " + location
        + "\nDietary Restrictions: " + diet)

})

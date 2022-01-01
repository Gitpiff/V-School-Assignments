const pokemon = new XMLHttpRequest();

pokemon.open("GET", "https://api.vschool.io/pokemon", true);
pokemon.send();

pokemon.onreadystatechange = function () {
    if (pokemon.readyState === 4 && pokemon.status === 200) {
        const JSONdata = pokemon.responseText;
        const data = JSON.parse(JSONdata);
        pokemonList(data.objects[0].pokemon)

    }
    // console.log(data)
}


function pokemonList(array) {
    for (let i = 0; i < array.length; i++) {
        const poke = document.createElement("h1");
        poke.textContent = array[i].name;
        document.body.appendChild(poke);
    }
}




const pokemonNombre = document.querySelector(".nombre");
const pokemonNumero = document.querySelector("#numero");
const pokemonImage = document.querySelector(".pokemon_imagen");
const form = document.querySelector(".formulario");
const input = document.querySelector(".busqueda");
const boton_prev = document.querySelector(".prev");
const boton_next = document.querySelector(".next");

let searchPokemon = 1;

function buscarPokemon(pokemon) {
    pokemonNombre.innerHTML = "Loading...";
    pokemonImage.style.display = "none";

    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    xhr.open('GET', url, true);
    xhr.onload = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            pokemonNombre.innerHTML = data.name;
            pokemonNumero.innerHTML = data.id;
            pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default;
            pokemonImage.style.display = 'block';
            searchPokemon = data.id;
            input.value = '';

            console.log(data)
        }
        else {
            pokemonNombre.innerHTML = 'No Encontrado el pokemon';
            pokemonNumero.innerHTML = '';
        }
    };
    xhr.onerror = function () {
        pokemonNombre.innerHTML = 'Error';
        pokemonNumero.innerHTML = '';

    };
    xhr.send();
}

form.addEventListener('submit', function (i) {
    i.preventDefault();
    buscarPokemon(input.value.toLowerCase())
});

boton_prev.addEventListener('click', function () {
    if (searchPokemon > 1) {
        searchPokemon = searchPokemon - 1;
        buscarPokemon(searchPokemon);
    }
})

boton_next.addEventListener('click', function () {
    searchPokemon = searchPokemon + 1;
    buscarPokemon(searchPokemon);
})

buscarPokemon(searchPokemon);

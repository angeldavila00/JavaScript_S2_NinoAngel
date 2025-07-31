const pokemonNombre = document.querySelector(".nombre");
const pokemonNumero = document.querySelector("#numero");
const pokemonImage = document.querySelector (".pokemon_imagen");
const form = document.querySelector(".formulario");
const input = document.querySelector("#busqueda");
const boton_prev = document.querySelector(".prev");
const boton_next = document.querySelector(".next");

let searchPkemon = 1;

function buscarPokemon(pokemon) {
    pokemonNombre.innerHTML = "Loading...";
    pokemonImage.style.display = "none"

    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    xhr.open('GET', url,true );

    xhr.onload = function() {

        if (xhr.readyState === 4 && xhr.status === 2000){

            console.log(data)

        }

        
    }
}

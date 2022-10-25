"use strict";

const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");
const shinyOrNot = document.querySelector(".shiny-version");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btnAnte = document.querySelector(".btn-ante");
const btnProx = document.querySelector(".btn-prox");


let randomPoke = Math.floor(Math.random() * 649) + 1;
console.log(randomPoke);

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  const data = await APIResponse.json();
  return data;
};
let pokemonType = "default";


let currentPoke;
const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;  
    currentPoke = data.id;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][`front_${pokemonType}`];
    

}

renderPokemon(randomPoke);


shinyOrNot.addEventListener("click", () => {
    pokemonType == "default" ? pokemonType = "shiny" :   pokemonType = "default";
    shinyOrNot.innerHTML == "versão shiny" ? shinyOrNot.innerHTML = "versão padrão"  : shinyOrNot.innerHTML = "versão shiny";
    input.value == "" ? renderPokemon(currentPoke) : renderPokemon(input.value);
    
})

form.addEventListener("submit",(event) => {
  
  event.preventDefault();
  renderPokemon(input.value);

})

btnAnte.addEventListener("click", () => {
  
  input.value == "" ? renderPokemon(randomPoke -= 1) : renderPokemon(currentPoke-1);
  
})

btnProx.addEventListener("click", () => {
  input.value == "" ? renderPokemon(randomPoke += 1) : renderPokemon(currentPoke+1);
  
})
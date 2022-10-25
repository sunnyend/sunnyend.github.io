"use strict";

const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");
const shinyOrNot = document.querySelector(".shiny-version");



const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  const data = await APIResponse.json();
  return data;
};





let pokemonType = "default"


const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    console.log(data);

    pokemonName.innerHTML = data.name;  
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][`front_${pokemonType}`];

}
shinyOrNot.addEventListener("click", () => {
    pokemonType == "default" ? pokemonType = "shiny" : pokemonType = "default";
    shinyOrNot.innerHTML == "versão shiny" ? shinyOrNot.innerHTML = "versão padrão"  : shinyOrNot.innerHTML = "versão shiny"
    renderPokemon("151");

    
})

renderPokemon("151");
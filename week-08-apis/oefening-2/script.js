let allPokemon = [];

// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }
let counter = document.querySelector("#counter")
let pokemon_list = document.querySelector("#pokemon-list")
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
   allPokemon = data.results.map((pokemon, index) => {
  return {...pokemon, id: index + 1 };
        });
        showPokemon(allPokemon);
    }) .catch(error => console.error('Fout:', error));


   function showPokemon(allPokemon) {
   pokemon_list.innerHTML = "";
   counter.textContent = allPokemon.length;
  for (let pokemon of allPokemon) {
  pokemon_list.innerHTML += ` <article>
  <h2>${pokemon.name}</h2>
 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
  alt="${pokemon.name}" width="100">
 </article>`;
} }
       
        showPokemon(allPokemon);

 let search_bar = document.querySelector("#search-bar")
        search_bar.addEventListener("input", () => {
            let search = search_bar.value;
            let filteredPokemon = allPokemon.filter(pokemon => {
                return pokemon.name.includes(search)
            })
            showPokemon(filteredPokemon)
        })

// Voeg een event listener toe aan #search-bar

// Filter allPokemon op naam en herrender de lijst


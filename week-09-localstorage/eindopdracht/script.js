let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  let results = document.querySelector("#results");

  results.innerHTML = items.map((pokemon, i) => {
  const isFavorite = favorites.includes(pokemon.name);
  return ` <article>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
   <h2>${pokemon.name}</h2> <button class="favorite-btn">  ${isFavorite ? "Verwijder favoriet" : "Favoriet"}
  </button>  </article>`;
    }).join("");
  // Zet elk item om naar een <article> met map() en toon het in #results

  // Voeg een <button class="favorite-btn"> toe per kaartje
  // Gebruik includes() om te checken of de naam al in favorites staat
  // Geef de knop een andere tekst als de Pokémon al een favoriet is

  // Voeg daarna een click event listener toe aan elke .favorite-btn
  // De index i vertelt je welke Pokémon bij welke knop hoort: items[i].name
 document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
  const name = items[i].name;
  if (favorites.includes(name)) {
  favorites = favorites.filter(fav => fav !== name);
  } else {
   favorites.push(name);
   }
   saveFavorites();
   showItems(items);
  });
});
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    allPokemon = data.results.map((pokemon, index) => {
  return {...pokemon, id: index + 1 };
        });
        showItems(allPokemon);
    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Roep showItems() aan met allPokemon
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });


// Maak een eventlistener voor de #show-all button
let show_all = document.querySelector("#show-all")
show_all.addEventListener("click", () => {
  showItems(allPokemon)
})
// Roep showItems() aan met allPokemon

// Maak een eventlistener voor de #show-favorites button
let favour= document.querySelector("#show-favorites")
favour.addEventListener("click", () => {
  let favorietePokemon = allPokemon.filter(pokemon => {
        return favorites.includes(pokemon.name);
    });
 showItems(favorietePokemon);
})
// Filter allPokemon op namen die in favorites staan (gebruik includes())
// Roep showItems() aan met het gefilterde resultaat

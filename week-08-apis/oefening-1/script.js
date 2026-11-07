let section = document.querySelector("#characters")
fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    for(let character of data.results) {
     section.innerHTML += `<article> 
     <h1>${character.name}</h1>
      <img src="${character.image}" alt="${character.name}" width="100">
     </article>`
    }

    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
  })
  .catch(error => console.error('Fout:', error));

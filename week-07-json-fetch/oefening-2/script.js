// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    movies.forEach(movies => {
    let li = document.createElement("li")
    let filmsList = document.querySelector("#films")
    li.textContent += `${movies.title} - ${movies.director} - ${movies.year} - ${movies.genre}`
 filmsList.appendChild(li)
 });
   
  })
  .catch(error => console.error('Fout:', error));
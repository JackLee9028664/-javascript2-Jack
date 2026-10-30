let allArticles = [];


const showArticles = (articles) => {
 let container = document.querySelector("#articles");

  container.innerHTML = "";
  for (let artikel of articles) {
    container.innerHTML += `
      <article>
        <h2>${artikel.title}</h2>
        <p>${artikel.category}</p>
        <p>${artikel.summary}</p>
      </article>`;
  }
};


fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
showArticles(allArticles);
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles
  })
  .catch(error => console.error('Fout bij laden:', error));

// Maak een eventlistener voor de #filter-alle button
let alle = document.querySelector("#filter-alle")
alle.addEventListener("click" , () => {
  showArticles(allArticles);
}) 
// Roep showArticles() aan met allArticles

// Maak een eventlistener voor de #filter-stad button
let stad = document.querySelector("#filter-stad")
stad.addEventListener("click" , () => {
   showArticles(
    allArticles.filter(artikel => artikel.category === "Stad")
  );
}) 
// Filter allArticles op category 'Stad' en roep showArticles() aan

// Maak een eventlistener voor de #filter-technologie button
let technologie = document.querySelector("#filter-technologie")
technologie.addEventListener("click" , () => {
    showArticles(allArticles.filter(artikel => artikel.category === "Technologie")
);
}) 
// Filter allArticles op category 'Technologie' en roep showArticles() aan

// Maak een eventlistener voor de #filter-media button
let media = document.querySelector("#filter-media")
media.addEventListener("click" , () => {
showArticles(
  allArticles.filter(artikel => artikel.category === "Media")
);
}) 
// Filter allArticles op category 'Media' en roep showArticles() aan

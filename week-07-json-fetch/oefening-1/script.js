fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    books.forEach(books => {
    let li = document.createElement("li")
    let bookList = document.querySelector("#books-list")
    li.textContent += `${books.title} - ${books.author}  - ${books.year}`
 bookList.appendChild(li)
 });
    // Toon elk boek als een <li> in #books-list
  })
  .catch(error => console.error('Fout:', error));

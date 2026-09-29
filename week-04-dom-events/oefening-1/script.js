// Voeg een event listener toe aan de knop
let button = document.getElementById("add")
const list = document.getElementById("list")
// Maak een <li> element aan met de tekst uit het invoerveld
button.addEventListener("click", function() {
let input = document.querySelector("#input").value
const nieuwList = document.createElement('li')
const deleteButton = document.createElement('button')
deleteButton.textContent = "verwijder"
list.appendChild(nieuwList)
list.appendChild(deleteButton)

nieuwList.textContent = input

deleteButton.addEventListener("click", () => {
nieuwList.remove()
deleteButton.remove()

})

})
// Voeg een verwijderknop toe aan elk <li> element

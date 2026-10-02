// Selecteer het formulier, invoerveld, takenlijst en teller
let button = document.getElementById("btn")
let amount = 0
let aantal = "task"
let counter = document.getElementById("counter")



// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
button.addEventListener("click", () => {
     event.preventDefault();
     
     let taskList = document.getElementById("tasks")
    let input = document.getElementById("task-input").value
    let list = document.createElement("li")
    let verwijderButton = document.createElement("button")
    verwijderButton.textContent = "verwijder"
    console.log(verwijderButton);
        list.innerHTML += `${input}  <input type="checkbox" id="checkbox"> </input>`
  let checkbox = document.getElementById("checkbox")
taskList.appendChild(list)
list.appendChild(verwijderButton)


      amount++
      counter.textContent= `${amount } task`
     

verwijderButton.addEventListener("click", () => {
 list.remove();
 amount--;

counter.innerHTML = `${amount}  ${aantal}`;
})

})
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

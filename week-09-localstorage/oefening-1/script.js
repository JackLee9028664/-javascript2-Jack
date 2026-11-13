let input =  document.querySelector("#input")
let save =  document.querySelector("#save")
let retrieve =  document.querySelector("#retrieve")
 let result =  document.querySelector("#result")
// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
save.addEventListener("click", () => {
   let inputValue = input.value.trim()
    localStorage.setItem('naam', inputValue)
})
localStorage.getItem
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
retrieve.addEventListener("click", () => {
let getItem = localStorage.getItem('naam')
if(getItem === "" || getItem === "null") {
   result.textContent = "nog niets opgeslagen is"
} else {
   result.textContent = getItem }
})
// Null-check: toon een melding als er nog niets opgeslagen is

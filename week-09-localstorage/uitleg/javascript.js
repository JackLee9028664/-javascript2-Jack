let message = "dit is een bericht"
localStorage.setItem('voornaam', message)

let input =  document.querySelector("#input")
let button =  document.querySelector("#button")

button.addEventListener("click", () => {
let InputValue = input.value.trim()
localStorage.setItem('value', InputValue)
})

localStorage.getItem('value')
console.log(getItemFromStore)
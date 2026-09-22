// Voeg een event listener toe aan elke knop
let button1 = document.querySelector("#btn-1")
let button2 = document.querySelector("#btn-2")
let button3 = document.querySelector("#btn-3")
let message = document.querySelector("#message")
let list = document.querySelector("#list")

// Knop 1: voeg tekst toe aan #message
button1.addEventListener("click", function() {
message.textContent = `Hallo`
});

// Knop 2: voeg een <li> toe aan #list met een tekst
const pokemons = ['pikachu', 'rowlet', 'litten'];

button2.addEventListener('click', function(){
 for (let pokemon of pokemons) {
    list.innerHTML += pokemons + '<br>';
  }
})
 




// Knop 3: wissel de klasse 'active' op #message
button3.addEventListener("click", function() {
 message.classList.toggle("active");
})

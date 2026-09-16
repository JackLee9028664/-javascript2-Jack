let button = document.getElementById("button");
let amount = document.getElementById("amount");
let discount = document.getElementById("discount");
let result = document.getElementById("result");
// Stap 1: Schrijf calculateTotal(bedrag, korting)
button.addEventListener("click", function () {
  e.preventDefault();

  if (amount.value == "" || discount.value == "") {
    result.textContent = "discount leeg";
  } else {
    result.textContent = calculater(amount.value, discount.value);
  }
});

function calculater(a, b) {
  return (a * b) / 100;
}

// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij

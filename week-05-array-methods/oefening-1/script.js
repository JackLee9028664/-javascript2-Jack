const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

let filterns = document.querySelector("#result-filtered")
let verdubbel = document.querySelector("#result-map")
let sorteren = document.querySelector("#result-sorted")

// Filter: toon alleen scores boven de 50 in #result-filtered
const filters = scores.filter(scores => scores > 50)
filterns.textContent = filters;
// Map: verdubbel alle scores en toon in #result-map
const dubble = scores.map(n => n * 2)
verdubbel.textContent = dubble

// Sort: sorteer van laag naar hoog en toon in #result-sorted
const sortenenen =scores.sort((a, b) => a - b);
sorteren.textContent = sortenenen
const user = { name: 'Anna', age: 28, city: 'Amsterdam' };
let zonder_json = document.querySelector("#zonder-json")
let met_json = document.querySelector("#met-json")
// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
localStorage.setItem('ZonderuserData', user);
let zonder = localStorage.getItem('ZonderuserData')
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
localStorage.setItem('userData', JSON.stringify(user));

const opgehaald = JSON.parse(localStorage.getItem('userData'));
console.log(opgehaald.name); // '
// Stap 3: toon het resultaat van beide methoden op de pagina
zonder_json.textContent = zonder
met_json.innerHTML += `name: ${opgehaald.name} age: ${opgehaald.age} city: ${opgehaald.city}` 





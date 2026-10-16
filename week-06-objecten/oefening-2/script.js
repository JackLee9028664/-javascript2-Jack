let origineel = document.querySelector("#origineel")
let kopie = document.querySelector("#kopie")

const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

const {name, age, city} = people
// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
const nameList = people.map(({name}) => name);
const cityList = people.map(({city}) => city);

origineel.innerHTML += `${nameList} <br>`
origineel.innerHTML += `${cityList}`
// 2. Maak met .map() en de spread operator een nieuwe array waarin
const kopiePoeple = people.map(people => ({...people, city: 'Den Haag'}))
console.log(kopiePoeple)
console.log(people)
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
const nieuwecity = kopiePoeple.map(({city}) => city)
const nieuweName = kopiePoeple.map(({name}) => name)
const nieuweage = kopiePoeple.map(({age}) => age)

//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.

kopie.innerHTML += ` ${nieuweName} <br> ${nieuweage} <br>  ${nieuwecity} `

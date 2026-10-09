const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
const searchFind = document.getElementById("search-find")
const searchInuput = document.getElementById("output-find")

searchFind.addEventListener("change", () => {
let searchInput = searchFind.value.toLowerCase();
let found = names.find(name => name.toLowerCase().startsWith(searchInput));
console.log(found)

searchInuput.textContent = found
})

   
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
const searchInclude = document.getElementById("search-includes")
const outputInclude = document.getElementById("output-includes")

//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 

let lowerNames = names.map(name => name.toLowerCase())
searchInclude.addEventListener("change", () => {
    let lower = searchInclude.value.toLowerCase()

    let exits = lowerNames.includes(lower)
    outputInclude.textContent = exits
    searchInclude.value = ""
})
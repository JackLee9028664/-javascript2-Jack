let form = document.querySelector("#shop_form");
let aantal = "task"
let button = document.querySelector("#counter");
let list =  document.querySelector("#list");
let amount = 0;
button.textContent ="add"



button.addEventListener("click", () =>{
    event.preventDefault();
   let input=  document.querySelector("#short_input").value;
   if(input == "") {
    alert("voer iets in de input")
   } else {
    button.innerHTML = `${amount}`
   let lijst = document.createElement("li");
    let verwijderButton = document.createElement("button");
    verwijderButton.textContent = "verwijder"
    console.log(verwijderButton);
        lijst.innerHTML += `${input} <input id="checkbox" class="" type="checkbox"></input>  `


list.appendChild(lijst)
lijst.appendChild(verwijderButton)

    
      amount++
      counter.textContent= `${amount } task`
     

verwijderButton.addEventListener("click", () => {
 lijst.remove()

 amount--;

  counter.innerHTML = `${amount} / ${aantal}`;
})
}
   
}) 

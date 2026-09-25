const title = document.querySelector("#title")
const button = document.querySelector("#btn")
const section = document.querySelector("#section")

   let teller = 0;
let naam = "jack";
let opleiding = "Software_Developer"



button.addEventListener("click", () => {
 
      teller++;
     title.textContent = "hoi, ik ben " + naam + "en il doe " + opleiding + "en heb " +
     teller + "punten "
      title.classList.toggle("active");

 button.textContent = "nog een keer"
 

const p = document.createElement("p")
p.textContent = "jij hebt nu " + teller
section.appendChild (p)
} )


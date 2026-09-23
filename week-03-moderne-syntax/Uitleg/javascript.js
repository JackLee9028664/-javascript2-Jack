
let Getname = document.getElementById("ShowName")
//function ShowName(Name) {
   // return "my naam is" + Name
//};


const ShowName = (Name) => {
     return `my naam is  ${Name}  `
};

Getname.textContent = ShowName("Jack")


const fruits =['apple', 'banaan', 'perzik']

//for (let i = 0;  i < fruits.length; i++) {
 //   console.log(fruits[0])
//}

for(let fruit of fruits) {
     Getname.innerHTML += fruit + "<br>";
}



let title = document.querySelector("#title");
let button = document.querySelector("#btn");
let section = document.querySelector("#section");

button.addEventListener("click", () => {
title.textContent = "ik heb geclickt" 
title.classList.toggle("active");

const p = document.createElement("p")
p.textContent = "voeg een paragraaf toe"
section.appendChild (p)
})
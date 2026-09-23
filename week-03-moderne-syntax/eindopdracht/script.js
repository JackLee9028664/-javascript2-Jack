// Stap 1: Selecteer het formulier en de profielenlijst
let profile_form = document.querySelector("#profile-form")
let profiles_list =  document.querySelector("#profiles-list")
let button = document.querySelector("#button")


let delete1 = document.querySelector("#delete1")
let delete2 = document.querySelector("#delete2")
let delete3 = document.querySelector("#delete3")



// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
button.addEventListener("click", () => {
     event.preventDefault();
     let role  = document.querySelector("#role").value
     let department = document.querySelector("#department").value
     let naam = document.querySelector("#naam").value

if (role == "" || department == "" || naam == "") {
    alert("geen informatie")
  } else {
   profiles_list.innerHTML +=   `<li> ${naam}  ${role}  ${department} </li>`
  }
})


// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

delete1.addEventListener("click", () => {
  event.preventDefault();
  
  naam.value = "";
});

delete2.addEventListener("click", () => {
  event.preventDefault();
  
  role.value = "";
});

delete3.addEventListener("click", () => {
  event.preventDefault();
  
  department.value = "";
});

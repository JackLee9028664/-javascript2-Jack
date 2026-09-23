// Stap 1: Selecteer het formulier en de profielenlijst
let profile_form = document.querySelector("#profile-form");
let profiles_list = document.querySelector("#profiles-list");
let button = document.querySelector("#button");



// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
button.addEventListener("click", (e) => {
  e.preventDefault();
  let role = document.querySelector("#role").value;
  let department = document.querySelector("#department").value;
  let naam = document.querySelector("#naam").value;

  if (role == "" || department == "" || naam == "") {
    alert("geen informatie");
  } else {
    profiles_list.innerHTML += `
   <article>
   <h2>${naam} </h2>
   <p>Role: ${role} </p>
   <p>Department: ${department}</p>
   <button id="delete">Verwijder</button>
   
   </article>
  
   
   `;
  }
  profile_form.reset();

  document.querySelector("#delete").addEventListener("click", (e) => {
  e.preventDefault();
  profiles_list.remove();
});

});

// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart


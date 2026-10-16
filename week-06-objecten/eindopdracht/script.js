let people = document.getElementById("users")
const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];



let filter = 'all';


const showUsers = (users) => {

  people.innerHTML = '';
 for (const user of users) {
  console.log(users)
const { name, email, role, active } = user;
let status = 'Inactief'
if(active) {
  status = 'Actief'
}

people.innerHTML += `
  <article>
    <h1>${name}</h1>
      <h2>${email}</h2>
          <h3>${role}</h3>
              <h3>${active}</h3>
  </article>
`;
}
  // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users

};

const filterUsers = () => {
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
  
  if(filter === 'admin') {
  const admins = users.filter(user => user.role === 'admin')
  showUsers(admins);
  } else {
showUsers(users)

  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
  }
};

let adminButton = document.querySelector("#filter-admin")
let allButton = document.querySelector("#filter-all")

adminButton.addEventListener("click", () => {
  filter = 'admin'
  filterUsers()
})
// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan

allButton.addEventListener("click", () => {
  filter = 'all'
  filterUsers()
})
// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan


let submitForm = document.querySelector("#user-form");



submitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameValue = document.querySelector("#name").value;
    let roleValue = document.querySelector("#role").value;
    let emailValue = document.querySelector("#email").value;

 const nieuwUser = {
        ...users,
        name: nameValue,
        email: emailValue,
        role: roleValue,
        
    };
    users.push(nieuwUser);
    filterUsers();
});
   

    



// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

filterUsers();



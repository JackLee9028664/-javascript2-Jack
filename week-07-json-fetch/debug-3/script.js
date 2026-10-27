// Fout gevonden: _______________ er was geen komma in de   { "name": "Anna",      "email": "anna@example.com"    },
  //{ "name": "Boris",     "email": "boris@example.com"   }, de script was niet gelinked met de html, de fetch werd verkeerd geschreven
  // de document.querySelector('#result'); was fout geschreven en appendchild wAS VERKEERD geschreven
// Oplossing: _______________

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));

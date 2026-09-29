const songInput = document.querySelector("#song")
const button = document.querySelector("#btn")
let songList = document.querySelector("#songlist")

button.addEventListener("click", () => {
    const input = songInput.value.trim()
    const list = document.createElement('li')
    const deleteButton = document.createElement('button')
    list.textContent = input

    deleteButton.textContent = "verwijder"
    songList.appendChild(list)
    songList.appendChild(deleteButton)

  deleteButton.addEventListener("click", () => {
    list.remove()
    deleteButton.remove()
  })
})
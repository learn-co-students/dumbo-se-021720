/************* DOM Elements *************/
const newDogForm = document.querySelector("#new-dog-form")
const toggleCheckbox = document.querySelector("#toggle-dark-mode")
const cardsUl = document.getElementById('cards')

/************* Event Listeners *************/
// Event Delegation
cardsUl.addEventListener("click", e => {
  // Update Dog
  if (e.target.dataset.action === "right") {
    const cardLi = e.target.closest(".card")
    const matchSpan = cardLi.querySelector(".match")
    if (matchSpan.textContent === "🐾") {
      matchSpan.textContent = ""
    } else {
      matchSpan.textContent = "🐾"
    }

    // Optimistic rendering
    const dogId = e.target.dataset.id
    const match = matchSpan.textContent === "🐾"

    // PATCH /dogs/:id
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ match: match })
    })

  }
  if (e.target.dataset.action === "left") {
    // DELETE /dogs/:id
    const dogId = e.target.dataset.id

    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "DELETE"
    })

    // Optimistic rendering
    const cardLi = e.target.closest(".card")
    cardLi.remove()
  }
})

// Toggle Dark Mode
toggleCheckbox.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode")
})

// Create Dog
newDogForm.addEventListener("submit", function (e) {
  e.preventDefault() // 0. always use this for submit events!

  // get the value from form inputs
  const newDog = {
    name: e.target.name.value,
    profile_pic: e.target.profile_pic.value,
    age: e.target.age.value,
    bio: e.target.bio.value,
    breed_name: e.target.breed_name.value,
    match: false
  }

  // POST /dogs
  fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDog)
  })
    .then(response => response.json())
    .then(actualNewDog => {
      // Pessimistic rendering
      renderDog(actualNewDog)
    })

})

/************* Render Helpers *************/
function renderDog(dogObj) {
  // 1. create the element
  const cardLi = document.createElement('li')
  // 2. set its attributes
  cardLi.className = "card"
  cardLi.dataset.id = dogObj.id

  // (need for speed: use innerHTML; best practices: don't!)
  cardLi.innerHTML = `
    <img src="${dogObj.profile_pic}" alt="${dogObj.name}">
    <div class="info">
      <h2>
        <span class="name">${dogObj.name}</span>, <span class="age">${dogObj.age}</span>
        <span class="match">${dogObj.match ? "🐾" : ""}</span>
        </h2>
      <p class="bio">${dogObj.bio}</p>
      <div class="tags">
        <span class="breed">${dogObj.breed_name}</span>
      </div>
    </div>
    <div class="buttons">
      <button data-action="left" data-id="${dogObj.id}" class="swipe left">💩</button>
      <button data-action="right" data-id="${dogObj.id}" class="swipe right">🐾</button>
    </div>
  `
  // 3. slap it on the DOM
  cardsUl.append(cardLi)
}


/************* Initial Render *************/
// GET /dogs
fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(dogsArray => {
    dogsArray.forEach(function (dog) {
      renderDog(dog)
    })
  })

// When X event happens
// Do Y fetch request
// And slap Z on/off the DOM

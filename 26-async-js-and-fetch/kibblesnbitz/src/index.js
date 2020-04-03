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

    // RESTful routing
    // PATCH /dogs/:id
    const dogId = e.target.dataset.id
    const match = matchSpan.textContent === "🐾"
    // console.log(dogId, match)
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ match: match })
    })

  }
  // Delete Dog
  if (e.target.dataset.action === "left") {

    // RESTful route for deleting a dog
    // Verb: DELETE
    // Path: /dogs/:id
    const dogId = e.target.dataset.id

    // sending a request
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "DELETE"
    })
    // .then(response => {
    //   // pessimistic rendering
    //   // response
    //   if (response.ok) {
    //     const cardLi = e.target.closest(".card")
    //     cardLi.remove()
    //   }
    // })

    // optimistic rendering
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

  // 1. get the value from form inputs
  const newDog = {
    name: e.target.name.value,
    profile_pic: e.target.profile_pic.value,
    age: e.target.age.value,
    bio: e.target.bio.value,
    match: false
  }

  // RESTful routing
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
      console.log(actualNewDog)
      // 2. render a new dog on the page
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
// Read Dogs
fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(dogsArray => {
    // console.log(data)
    dogsArray.forEach(function (dog) {
      renderDog(dog)
    })
  })

// When X event happens
// Do Y fetch request
// And slap Z on/off the DOM

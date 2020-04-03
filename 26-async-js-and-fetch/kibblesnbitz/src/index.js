/************* DOM Elements *************/
const newDogForm = document.querySelector("#new-dog-form")
const toggleCheckbox = document.querySelector("#toggle-dark-mode")
const cardsUl = document.getElementById('cards')

/************* Event Listeners *************/
// Event Delegation
cardsUl.addEventListener("click", e => {
  if (e.target.dataset.action === "right") {
    const cardLi = e.target.closest(".card")
    const matchSpan = cardLi.querySelector(".match")
    if (matchSpan.textContent === "🐾") {
      matchSpan.textContent = ""
    } else {
      matchSpan.textContent = "🐾"
    }
  }
  if (e.target.dataset.action === "left") {
    const cardLi = e.target.closest(".card")
    cardLi.remove()
  }
})


toggleCheckbox.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode")
})

newDogForm.addEventListener("submit", function (e) {
  e.preventDefault() // 0. always use this for submit events!

  // 1. get the value from form inputs
  const newDog = {
    name: e.target.name.value,
    profile_pic: e.target.profile_pic.value,
    age: e.target.age.value,
    bio: e.target.bio.value
  }

  // 2. render a new dog on the page
  renderDog(newDog)
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
      <button data-action="left" class="swipe left">💩</button>
      <button data-action="right" data-id="${dogObj.id}" class="swipe right">🐾</button>
    </div>
  `
  // 3. slap it on the DOM
  cardsUl.append(cardLi)
}

/************* Initial Render *************/
dogs.forEach(function (dog) {
  renderDog(dog)
})
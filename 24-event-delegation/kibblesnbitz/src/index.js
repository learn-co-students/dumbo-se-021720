/************* DOM Elements *************/
const newDogForm = document.querySelector("#new-dog-form")
const toggleCheckbox = document.querySelector("#toggle-dark-mode")
const cardsUl = document.getElementById('cards')

/************* Event Listeners *************/
toggleCheckbox.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode")
})

newDogForm.addEventListener("submit", function (e) {
  e.preventDefault() // always use for submit events!

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
      <button class="swipe left">💩</button>
      <button class="swipe right">🐾</button>
    </div>
  `
  // 3. slap it on the DOM
  cardsUl.append(cardLi)
}

/************* Initial Render *************/
dogs.forEach(function (dog) {
  renderDog(dog)
})

/************* DOM Elements *************/
const newDogForm = document.querySelector("#new-dog-form")
const toggleCheckbox = document.querySelector("#toggle-dark-mode")
const cardsUl = document.getElementById('cards')

/************* Event Listeners *************/
// EVENT DELEGATION
// 1. find the closest stable parent of the elements that want to listen for events on
cardsUl.addEventListener("click", e => {
  // 2. use some conditional logic to determine if the element we care about was the one that triggered the event
  if (e.target.dataset.action === "right") {
    console.log(e.target.dataset.id)
    // run our code (for matching)
    // go up the dom tree to find the related parent
    const cardLi = e.target.closest(".card")
    // go down the dom tree to find sibling
    const matchSpan = cardLi.querySelector(".match")
    if (matchSpan.textContent === "🐾") {
      matchSpan.textContent = ""
    } else {
      matchSpan.textContent = "🐾"
    }
    //   dogObj.match = !dogObj.match
    //   matchSpan.textContent = dogObj.match ? "🐾" : ""
  }
  if (e.target.dataset.action === "left") {
    // run our code (for swipe left)
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

  // NESTED EVENT LISTENER STRAT
  // const leftBtn = cardLi.querySelector(".swipe.left")
  // leftBtn.addEventListener("click", e => {
  //   cardLi.remove()
  // })

  // const rightBtn = cardLi.querySelector(".swipe.right")

  // rightBtn.addEventListener("click", () => {
  //   // we want to toggle the match property on the dogObj
  //   // we also need to update the DOM to show a paw print
  //   // if the dog is a match
  //   const matchSpan = cardLi.querySelector(".match")
  //   dogObj.match = !dogObj.match
  //   matchSpan.textContent = dogObj.match ? "🐾" : ""

  //   // if (matchSpan.textContent === "🐾") {
  //   //   matchSpan.textContent = ""
  //   // } else {
  //   //   matchSpan.textContent = "🐾"
  //   // }
  // })
}

/************* Initial Render *************/
dogs.forEach(function (dog) {
  renderDog(dog)
})
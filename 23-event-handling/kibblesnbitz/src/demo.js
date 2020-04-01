document.querySelector("input[type='checkbox']").addEventListener('click', e => {
  document.body.classList.toggle("dark-mode")
})

document.querySelector("#new-dog-form").addEventListener("submit", e => {
  e.preventDefault()

  const newDog = {
    name: e.target.name.value,
    profile_pic: e.target.profile_pic.value,
    age: e.target.age.value,
    bio: e.target.bio.value,
    match: false
  }

  renderCard(newDog)
})

function renderCard(dogObj) {
  const dogCard = document.createElement("li")
  dogCard.className = "card"

  dogCard.innerHTML = `
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

  dogCard.querySelector(".right").addEventListener("click", e => {
    dogObj.match = !dogObj.match
    const span = dogCard.querySelector(".match")
    span.textContent = dogObj.match ? "🐾" : ""
  })

  dogCard.querySelector(".left").addEventListener("click", e => {
    dogCard.remove()
  })

  document.querySelector("#cards").append(dogCard)
}

// initial render
dogs.forEach(renderCard)
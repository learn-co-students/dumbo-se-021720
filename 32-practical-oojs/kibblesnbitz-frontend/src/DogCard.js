// component
// data (properties)
// render (slap on the DOM)
// handle events
class DogCard {

  // class variable
  static parentElement = document.getElementById('cards')

  constructor(dog) {
    this.dog = dog
  }

  // in a class, if you're using a method as callback
  // make it an arrow fn
  handleMatch = (e) => {
    console.log("match click", this)

    const matchSpan = this.card.querySelector(".match")

    // use helper in fetches.js
    adapter.matchDog(this.dog.id)
      .then(updatedDog => {
        // Pessimistic rendering (using response to render)
        matchSpan.textContent = updatedDog.match ? "🐾" : ""
      })
  }

  handleDelete = () => {
    // use helper in fetches.js
    adapter.deleteDog(this.dog.id)

    // Optimistic rendering
    this.card.remove()
  }

  render() {
    // 1. create the element
    this.card = document.createElement('li')
    // 2. set its attributes
    this.card.className = "card"
    this.card.dataset.id = this.dog.id

    // (need for speed: use innerHTML; best practices: don't!)
    this.card.innerHTML = `
      <img src="${this.dog.profile_pic}" alt="${this.dog.name}">
      <div class="info">
        <h2>
          <span class="name">${this.dog.name}</span>, <span class="age">${this.dog.age}</span>
          <span class="match">${this.dog.match ? "🐾" : ""}</span>
          </h2>
        <p class="bio">${this.dog.bio}</p>
        <div class="tags">
          <span class="breed">${this.dog.breed_name}</span>
        </div>
      </div>
      <div class="buttons">
        <button data-action="left" data-id="${this.dog.id}" class="swipe left">💩</button>
        <button data-action="right" data-id="${this.dog.id}" class="swipe right">🐾</button>
      </div>
    `

    const rightButton = this.card.querySelector(".right")
    rightButton.addEventListener("click", this.handleMatch)

    const leftButton = this.card.querySelector(".left")
    leftButton.addEventListener("click", this.handleDelete)

    // 3. slap it on the DOM
    DogCard.parentElement.append(this.card)
  }
}
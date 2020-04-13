const adapter = new APIAdapter("http://localhost:3000")

/************* DOM Elements *************/
const newDogForm = document.querySelector("#new-dog-form")
const toggleCheckbox = document.querySelector("#toggle-dark-mode")
const cardsUl = document.getElementById('cards')

const controlledForm = new ControlledForm(newDogForm)

controlledForm.onSubmit = data => {
  console.log("in onSubmit", data)
  data.match = false

  // use helper in fetches.js
  adapter.createDog(data)
    .then(actualNewDog => {
      // Pessimistic rendering
      // create a DogCard component with th data for each dog
      const dogCard = new DogCard(actualNewDog)

      // tell the card to render itself
      dogCard.render()
    })
    .catch(err => console.error(err))

}

/************* Event Listeners *************/

// Toggle Dark Mode
toggleCheckbox.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode")
})

// Create Dog
// newDogForm.addEventListener("submit", function (e) {
//   e.preventDefault() // 0. always use this for submit events!

//   // get the value from form inputs
//   const newDog = {
//     name: e.target.name.value,
//     profile_pic: e.target.profile_pic.value,
//     age: e.target.age.value,
//     bio: e.target.bio.value,
//     breed_name: e.target.breed_name.value,
//     match: false
//   }

//   // use helper in fetches.js
//   adapter.createDog(newDog)
//     .then(actualNewDog => {
//       // Pessimistic rendering
//       // create a DogCard component with th data for each dog
//       const dogCard = new DogCard(actualNewDog)

//       // tell the card to render itself
//       dogCard.render()
//     })
//     .catch(err => console.error(err))

// })

/************* Initial Render *************/
// use helper in fetches.js
adapter.getAllDogs().then(dogsArray => {
  dogsArray.forEach(function (dog) {
    // create a DogCard component with th data for each dog
    const dogCard = new DogCard(dog)

    // tell the card to render itself
    dogCard.render()
  })
})

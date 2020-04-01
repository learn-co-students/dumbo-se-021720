// 1. Figure out what element I care about listening for events on
// 2. What kind of event do we care about?
// 3. Define what code we want to run WHEN that event happens
const newDogForm = document.querySelector("#new-dog-form")
newDogForm.addEventListener("submit", function (e) {
  // always need this line of code!
  e.preventDefault()

  console.log(e.target)

  // 1. get the value from form inputs
  const name = e.target.name.value
  const profile_pic = e.target.profile_pic.value
  const age = e.target.age.value
  const bio = e.target.bio.value

  // this: 
  const newDog = {
    name,
    profile_pic,
    age,
    bio
  }

  // is the same as this:
  // const newDog = {
  //   name: name,
  //   profile_pic: profile_pic,
  //   age: age,
  //   bio: bio
  // }

  console.log(newDog)

  // 2. create a new dog on the page
  createDog(newDog)
})



const toggleCheckbox = document.querySelector("#toggle-dark-mode")
toggleCheckbox.addEventListener("click", function (e) {
  console.log(e.target)
  // toggle the class on the body element to dark-mode
  document.body.classList.toggle("dark-mode")
})

























// 1. find a place on the DOM to put our new elements
const cardsUl = document.getElementById('cards')

function createDog(dogObj) {
  const cardLi = document.createElement('li')
  cardLi.className = "card"
  cardLi.dataset.id = dogObj.id

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
  cardsUl.append(cardLi)
  // create the HTML elements
  // document.createElement
  // innerHTML
  // and insert the info from the dog obj
  // cardsUl.innerHTML = cardsUl.innerHTML + `
  //   <li class="card">
  //     <img src="${dogObj.profile_pic}" alt="${dogObj.name}">
  //     <div class="info">
  //       <h2>
  //         <span class="name">${dogObj.name}</span>, <span class="age">${dogObj.age}</span>
  //         <span class="match">${dogObj.match ? "🐾" : ""}</span>
  //       </h2>
  //       <p class="bio">${dogObj.bio}</p>
  //     </div>
  //     <div class="buttons">
  //       <button class="swipe left">💩</button>
  //       <button class="swipe right">🐾</button>
  //     </div>
  //   </li>
  // `
}

// iterate through all the dogs
dogs.forEach(function (dog) {
  createDog(dog)
})

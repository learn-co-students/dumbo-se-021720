console.log("hi!")
// Read
const h1 = document.querySelector("h1")

// Update
h1.textContent = "something else"
h1.style.color = "red"

// Delete
// h1.remove()

// Create

// strat 1: append 
// 1. create the actual DOM element
// const btn = document.createElement("button")

// // 2. update any attributes of that element
// btn.id = "delete"
// btn.textContent = "X"

// // 3. append to some parent element
// profile.append(btn)

const dog = { name: "Fezzik", bio: "good boy (ish)", image: "https://i.pinimg.com/564x/22/6b/3e/226b3e39ddade735a3fc4f3a1093c0f4.jpg" }

// strat 2: innerHTML
function createProfile(dogObj) {
  const profile = document.querySelector("#profile")
  profile.innerHTML = `
    <img src="${dogObj.image}" alt="">
    <h3>${dogObj.name}</h3>
    <p>${dogObj.bio}</p>
  `
}


// TODO: make some sample data and slap it on the DOM
const data = []
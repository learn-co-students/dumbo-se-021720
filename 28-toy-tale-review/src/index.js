
// Application state
let addToy = false;
let toys = []

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  const toyCollectionDiv = document.querySelector("#toy-collection")

  // Event Listeners
  // create an event listener on the toy form to see when it submits
  toyForm.addEventListener("submit", e => {
    e.preventDefault()
    // when it submits, we need to get input from the form
    const toyNameInput = document.querySelector("#name-input")
    const toyImageInput = document.querySelector("#image-input")

    const newToy = {
      "name": toyNameInput.value,
      "image": toyImageInput.value,
      "likes": 0
    }

    // send that input data using fetch POST 
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((toyObj) => {
        // then render the response
        renderToy(toyObj)
      })

    e.target.reset()
  })

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });





  // Render Helper
  function renderToy(toyObj) {
    // create a div.card for each toy 
    const toyDiv = document.createElement("div")
    toyDiv.className = "card"

    const h2 = document.createElement("h2")
    h2.textContent = toyObj.name

    const img = document.createElement("img")
    img.src = toyObj.image
    img.className = "toy-avatar"

    const p = document.createElement("p")
    p.textContent = `${toyObj.likes} Likes`

    const button = document.createElement("button")
    button.textContent = `Like <3`
    button.className = "like-btn"


    button.addEventListener("click", e => {
      console.log(toys)
      // Update the DOM
      // Optimistic rendering
      toyObj.likes++
      p.textContent = `${toyObj.likes} Likes`

      // Update the server
      fetch(`http://localhost:3000/toys/${toyObj.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          likes: toyObj.likes
        }),
      })

    })

    toyDiv.append(h2, img, p, button)

    // append to the toy-collection
    toyCollectionDiv.append(toyDiv)
  }

  // Initial Fetch & Render
  fetch("http://localhost:3000/toys")
    .then(r => r.json())
    .then(toyArray => {
      toys = toyArray
      // when i get the response, iterate through the array of toys
      toyArray.forEach(renderToy)
    })
});




// On the `index.html` page, there is a `div` with the `id` 
// "toy-collection."
// When the page loads, make a 'GET' request to fetch all the 
// toy objects. With the
// response data, make a `<div class="card">` for each toy and 
// add it to the
// toy-collection `div`.
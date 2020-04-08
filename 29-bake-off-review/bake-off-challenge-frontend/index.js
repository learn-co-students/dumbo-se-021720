// your code here!
console.log("🥧")

// get access to the sidebar container (#bakes-container)
const bakesContainer = document.querySelector("#bakes-container")

// **When this form is submitted**, 

// get access to the form and add an event listner to it
document.querySelector("#new-bake-form").addEventListener("submit", e => {
  e.preventDefault()

  // get access to the input values
  const newBake = {
    name: e.target.name.value,
    image_url: e.target.image_url.value,
    description: e.target.description.value
  }

  fetch("http://localhost:3000/bakes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBake)
  })
    .then(r => r.json())
    .then(actualNewBake => {
      renderBakeSidebar(actualNewBake)
    })
})


fetch("http://localhost:3000/bakes")
  .then(r => r.json())
  .then(bakesArray => {
    // forEach bake, call a fn to render that individual bake onto the list
    bakesArray.forEach(renderBakeSidebar)
    renderDetail(bakesArray[0])
  })

function renderBakeSidebar(bakeObj) {
  // create the element
  const bakeLi = document.createElement("li")
  // give it some attributes
  bakeLi.className = "item"
  bakeLi.dataset.id = bakeObj.id
  bakeLi.textContent = bakeObj.name
  // append /slap on the DOM
  bakesContainer.append(bakeLi)

  // **When a bake is clicked in the sidebar**, 
  bakeLi.addEventListener("click", e => {
    // Closure
    renderDetail(bakeObj)
  })
}

function renderDetail(bakeObj) {
  console.log("ORIGINAL BAKE: ", bakeObj)
  // the details for the bake should show up in the detail area.
  const detailDiv = document.querySelector("#detail")
  detailDiv.innerHTML = ""
  // detailDiv.innerHTML = `
  //   <img src="${bakeObj.image_url}" alt="${bakeObj.name}">
  //   <h1>${bakeObj.name}</h1>
  //   <p class="description">
  //   ${bakeObj.description}
  //   </p>
  //   <form id="score-form" data-id="${bakeObj.id}">
  //     <input value="${bakeObj.score}" type="number" name="score" min="0" max="10" step="1">
  //     <input type="submit" value="Rate">
  //   </form>
  // `

  const img = document.createElement("img")
  img.src = bakeObj.image_url
  img.alt = bakeObj.name

  const h1 = document.createElement("h1")
  h1.textContent = bakeObj.name

  const p = document.createElement("p")
  p.className = "description"
  p.textContent = bakeObj.description

  const form = document.createElement("form")
  form.id = "score-form"
  form.dataset.id = bakeObj.number

  const scoreInput = document.createElement("input")
  scoreInput.value = bakeObj.score
  scoreInput.type = "number"
  scoreInput.min = 0
  scoreInput.max = 10
  scoreInput.step = 1
  scoreInput.name = "score"

  const submitInput = document.createElement("input")
  submitInput.type = "submit"
  submitInput.value = "rate"

  form.append(scoreInput, submitInput)
  detailDiv.append(img, h1, p, form)

  form.addEventListener("submit", e => {
    // also a closure
    e.preventDefault()
    const userScore = e.target.score.value

    updateScore(userScore, bakeObj)
  })

  // create some DOM elements 
  //   < img src = "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/icecreams_forweb.jpg" alt = "Alice’s Orange & Cardamom ‘Ice Cream’ Buns" >
  //     <h1>Alice’s Orange & Cardamom ‘Ice Cream’ Buns</h1>
  //     <p class="description">
  //       Fragrant breads baked to resemble ice-cream tubs are topped with a delicious cream-cheese icing and sprinkles. They are great fun to serve to children.
  // </p>
  //     <form id="score-form" data-id="1">
  //       <input value="10" type="number" name="score" min="0" max="10" step="1">
  //         <input type="submit" value="Rate">
  // </form>

}

function updateScore(userScore, bakeObj) {
  fetch(`http://localhost:3000/bakes/${bakeObj.id}/ratings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
    },
    body: JSON.stringify({
      score: parseInt(userScore)
    })
  })
    .then(r => r.json())
    .then(updatedBake => {
      console.log("UPDATED BAKE: ", updatedBake)
      bakeObj.score = updatedBake.score
      console.log("ORIGINAL BAKE: ", bakeObj)
    })
}

// INDIVIDUAL EVENT LISTENERS


function outerFn(num) {
  let i = 2 + num

  function innerFn() {
    // closure
    console.log(i)
  }

  innerFn()
}

outerFn(5)

outerFn(7)
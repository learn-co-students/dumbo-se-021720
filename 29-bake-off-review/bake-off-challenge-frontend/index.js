// Fetches
const BASE_URL = "http://localhost:3000"
function createBake(newBake) {
  return fetch(BASE_URL + "/bakes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBake)
  })
    .then(r => r.json())
}

function getBakes() {
  return fetch(BASE_URL + "/bakes")
    .then(r => r.json())
}

function updateScore(id, data) {
  return fetch(BASE_URL + `/bakes/${id}/ratings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
    },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
}

function getWinner() {
  return fetch(BASE_URL + "/bakes/winner")
    .then(r => r.json())
}

// Event Handlers
document.querySelector("#new-bake-form").addEventListener("submit", e => {
  e.preventDefault()

  // get access to the input values
  const newBake = {
    name: e.target.name.value,
    image_url: e.target.image_url.value,
    description: e.target.description.value
  }

  createBake(newBake)
    .then(renderBakeSidebar)
})

document.querySelector("#judge-bake-button").addEventListener("click", () => {
  getWinner()
    .then(winner => renderWinner(winner.id))
})

// Render Helpers
function renderWinner(id) {
  document.querySelectorAll(".item").forEach(bakeLi => {
    if (parseInt(bakeLi.dataset.id) === id) {
      bakeLi.className = "item winner"
    } else {
      bakeLi.className = "item"
    }
  })
}

function renderBakeSidebar(bakeObj) {
  // create the element
  const bakeLi = document.createElement("li")

  // give it some attributes
  bakeLi.className = "item"
  bakeLi.dataset.id = bakeObj.id
  bakeLi.textContent = bakeObj.name

  // slap on the DOM
  document.querySelector("#bakes-container").append(bakeLi)

  bakeLi.addEventListener("click", () => {
    renderDetail(bakeObj)
  })
}


function renderDetail(bakeObj) {
  const detailDiv = document.querySelector("#detail")
  detailDiv.innerHTML = "" // clear out the old contents

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
    e.preventDefault()

    const bakeData = {
      score: parseInt(e.target.score.value)
    }

    updateScore(bakeObj.id, bakeData)
      .then(updatedBake => {
        bakeObj.score = updatedBake.score
      })
  })
}

// Initial Render
getBakes()
  .then(bakesArray => {
    bakesArray.forEach(renderBakeSidebar)
    renderDetail(bakesArray[0])
  })

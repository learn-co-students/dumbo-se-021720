const BASE_URL = "http://localhost:3000"

// adapter pattern

// GET /dogs
function getAllDogs() {
  return fetch(BASE_URL + "/dogs")
    .then(response => response.json())
}

// PATCH /dogs/:id/match
function matchDog(dogId) {
  return fetch(BASE_URL + `/dogs/${dogId}/match`, {
    method: "PATCH"
  })
    .then(response => response.json())
}

// DELETE /dogs/:id
function deleteDog(dogId) {
  return fetch(BASE_URL + `/dogs/${dogId}`, {
    method: "DELETE"
  })
    .then(response => response.json())
}


// POST /dogs
// Body: { ...newDog }
function createDog(newDog) {
  return fetch(BASE_URL + "/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDog)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error("bad request")
      }
    })
}
class APIAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  // helper method for making request + parsing JSON
  fetchAndParse(url, options) {
    return fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error("bad request")
        }
      })
  }

  // GET /dogs
  getAllDogs() {
    return this.fetchAndParse(this.baseUrl + "/dogs")
  }

  // PATCH /dogs/:id/match
  matchDog(dogId) {
    return this.fetchAndParse(this.baseUrl + `/dogs/${dogId}/match`, {
      method: "PATCH"
    })
  }

  // DELETE /dogs/:id
  deleteDog(dogId) {
    return this.fetchAndParse(this.baseUrl + `/dogs/${dogId}`, {
      method: "DELETE"
    })
  }


  // POST /dogs
  // Body: { ...newDog }
  createDog(newDog) {
    return this.fetchAndParse(this.baseUrl + "/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDog)
    })
  }

}
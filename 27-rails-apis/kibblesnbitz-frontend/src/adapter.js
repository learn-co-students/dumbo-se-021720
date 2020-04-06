const createAdapter = url => {

  // helper method to send the request and parse the response
  // also helps with error handling
  const fetchAndParse = (endpoint, options) => {
    return fetch(url + endpoint, options)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error("Something went wrong!")
        }
      })
  }

  // return an object with methods for all requests we want to use
  return {
    getDogs() {
      return fetchAndParse("/dogs")
    },
    createDog(newDog) {
      return fetchAndParse("/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newDog)
      })
    },
    matchDog(id) {
      return fetchAndParse(`/dogs/${id}/match`, {
        method: "PATCH"
      })
    },
    deleteDog(id) {
      return fetchAndParse(`/dogs/${id}`, {
        method: "DELETE"
      })
    }
  }

}

// usage: 
const adapter = createAdapter("http://localhost:3000")
adapter.getDogs().then(console.log)
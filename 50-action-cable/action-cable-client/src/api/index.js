const BASE_URL = "http://localhost:3000"

export const getUsers = () => {
  return fetch(BASE_URL + "/users")
    .then(r => r.json())
}

export const login = id => {
  return fetch(BASE_URL + `/users/${id}`, {
    credentials: "include"
  })
    .then(r => r.json())
}

export const getTweets = userId => {
  return fetch(BASE_URL + `/users/${userId}/tweets`)
    .then(r => r.json())
}

export const createTweet = (userId, message) => {
  return fetch(BASE_URL + `/users/${userId}/tweets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
    .then(r => r.json())
}
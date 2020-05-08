import { getWeather } from '../api/weather'
import { getRandomPokemon } from '../api/pokemon'

// action creators
// function that returns an action { type: "", payload: data }
export function setPosition(position) {
  return { type: "SET_POSITION", payload: position }
}

export function setWeather(weather) {
  return { type: "SET_WEATHER", payload: weather }
}

// thunky actions!
// function that returns a function that will get called with `dispatch`
export function fetchPokemon(lat, lng) {
  return function (dispatch) {
    dispatch({ type: "FETCHING_POKEMON" })

    getRandomPokemon()
      .then(pokemon => {
        const pokemonWithPosition = { ...pokemon, position: [lat, lng] }
        dispatch({ type: "ADD_POKEMON", payload: pokemonWithPosition })
      })
      .catch(err => {
        dispatch({ type: "FETCHING_POKEMON_ERROR" })
        console.error("Pokemon fetch error", err)
      })
  }
}

export const fetchWeather = position => dispatch => {
  dispatch({ type: "FETCHING_WEATHER" })

  getWeather(position[0], position[1])
    .then(weather => {
      dispatch({ type: "SET_WEATHER", payload: weather })
    })
}

// export function fetchWeather(position) {
//   return function (dispatch) {
//     getWeather(position[0], position[1])
//       .then(weather => {
//         console.log("Fetched weather:", weather)
//         dispatch({ type: "SET_WEATHER", payload: weather })
//       })
//   }
// }
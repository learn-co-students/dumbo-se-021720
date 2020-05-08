const defaultState = {
  weather: null,
  position: []
}

const reducer = (state = defaultState, action) => {
  console.log("user reducer", action)
  switch (action.type) {
    case "SET_POSITION":
      return { ...state, position: action.payload }
    case "SET_WEATHER":
      return { ...state, weather: action.payload }
    default:
      return state
  }
}

export default reducer
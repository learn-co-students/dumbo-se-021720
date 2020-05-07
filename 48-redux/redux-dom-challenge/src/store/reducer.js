const defaultState = {
  counter: 100,
  paused: true,
  likedNumbers: {},
  comment: "pls work?",
  comments: ["some comment"],
  somethingElse: "yeah"
}

// PURE FUNCTION - has no side effects 
// (without a return value, it's kinda useless)
// don't modify the data that is passed in
// it can't rely on external data
// needs to return the same output given the same input

// Reducer takes the current state from the store and an action that we dispatch
// and returns a new object with the next version of state
// We need to provide a 'default state' so the first time our reducer is called 
// it can set up the initial state
// The action must be a POJO that has a key of type { type: "ACTION_TYPE", payload: data }
export const reducer = (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "LIKE_NUMBER":
      const count = state.likedNumbers[state.counter] ? state.likedNumbers[state.counter] + 1 : 1

      return {
        ...state,
        likedNumbers: {
          ...state.likedNumbers,
          [state.counter]: count
        }
      }
    case "TOGGLE_PAUSE":
      return {
        ...state,
        paused: !state.paused
      }
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, state.comment],
        comment: ""
      }
    case "UPDATE_COMMENT":
      return {
        ...state,
        comment: action.payload
      }
    default:
      return state
  }
}
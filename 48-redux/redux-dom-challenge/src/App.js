import React from "react";
import "./App.css";
import Comments from "./Comments";

const reducer = (state, action) => {
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

class App extends React.Component {
  state = {
    counter: 0,
    paused: true,
    likedNumbers: {},
    comment: "",
    comments: []
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.state.paused) {
        this.dispatch({ type: "INCREMENT" })
      }
    }, 1000)
  }

  // setting state
  // action: { type: "message", payload: data }
  dispatch = action => {
    const nextState = reducer(this.state, action)
    console.log("nextState", nextState)
    this.setState(nextState)
  }


  handleFormSubmit = e => {
    e.preventDefault()
    this.dispatch({ type: "ADD_COMMENT" })
  }

  render() {
    const { counter, paused, likedNumbers, comment, comments } = this.state
    return (
      <div className="App">
        <h1>Redux DOM Challenge</h1>
        <h1>Counter: {counter}</h1>

        <button onClick={() => this.dispatch({ type: "DECREMENT" })}>
          <span role="img" aria-label="minus">➖</span>
        </button>
        <button onClick={() => this.dispatch({ type: "INCREMENT" })}>
          <span role="img" aria-label="plus">➕</span>
        </button>
        <button onClick={() => this.dispatch({ type: "LIKE_NUMBER" })}>
          <span role="img" aria-label="heart">❤️</span>
        </button>
        <button onClick={() => this.dispatch({ type: "TOGGLE_PAUSE" })}>
          <span role="img" aria-label={paused ? "play" : "pause"}>
            {paused ? "▶️" : "⏸"}
          </span>
        </button>

        <h2>Likes:</h2>
        {Object.keys(likedNumbers).map(key =>
          <p key={key}>{key}: {likedNumbers[key]} likes</p>
        )}

        <hr />

        <Comments
          comment={comment}
          comments={comments}
          handleFormSubmit={this.handleFormSubmit}
          handleUpdateComment={e => this.dispatch({ type: "UPDATE_COMMENT", payload: e.target.value })}
        />
      </div>
    );
  }
}

export default App;
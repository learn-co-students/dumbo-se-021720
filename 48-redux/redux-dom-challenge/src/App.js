import React from "react";
import { connect } from 'react-redux'
import "./App.css";
import Comments from "./Comments";

class App extends React.Component {

  componentDidMount() {
    setInterval(() => {
      if (!this.props.paused) {
        this.props.increment()
      }
    }, 1000)
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addComment()
  }

  render() {
    console.log("App props", this.props)
    const { counter, paused, likedNumbers } = this.props
    return (
      <div className="App">
        <h1>Redux DOM Challenge</h1>
        <h1>Counter: {counter}</h1>

        <button onClick={() => this.props.decrement()}>
          <span role="img" aria-label="minus">➖</span>
        </button>
        <button onClick={() => this.props.increment()}>
          <span role="img" aria-label="plus">➕</span>
        </button>
        <button onClick={() => this.props.likeNumber()}>
          <span role="img" aria-label="heart">❤️</span>
        </button>
        <button onClick={() => this.props.togglePause()}>
          <span role="img" aria-label={paused ? "play" : "pause"}>
            {paused ? "▶️" : "⏸"}
          </span>
        </button>

        <h2>Likes:</h2>
        {Object.keys(likedNumbers).map(key =>
          <p key={key}>{key}: {likedNumbers[key]} likes</p>
        )}

        <hr />

        <Comments />
      </div>
    );
  }
}

// mapStateToProps = returns whatever props we want added to our component
const mapStateToProps = state => {
  console.log("mSP", state)
  return {
    counter: state.counter,
    paused: state.paused,
    likedNumbers: state.likedNumbers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    someFunc: () => dispatch({ type: "WHATEVER" }),
    updateComment: (text) => dispatch({ type: "UPDATE_COMMENT", payload: text }),
    togglePause: () => dispatch({ type: "TOGGLE_PAUSE" }),
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    addComment: () => dispatch({ type: "ADD_COMMENT" }),
    likeNumber: () => dispatch({ type: "LIKE_NUMBER" }),
  }
}

// HOC - Higher Order Component
export default connect(mapStateToProps, mapDispatchToProps)(App);
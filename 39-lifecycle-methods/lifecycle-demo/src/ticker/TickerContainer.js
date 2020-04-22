import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {
  state = {
    number: 0,
    interval: null,
    color: "white"
  }

  componentDidMount() {
    this.startInterval()
  }

  componentDidUpdate(_, prevState) {
    if (this.state.number !== prevState.number) {
      const color = this.state.number > prevState.number ? "green" : "red"
      this.setState({ color })
    }
  }

  startInterval() {
    const interval = setInterval(this.updateTickerValue, 1000)
    this.setState({ interval })
  }

  stopInterval() {
    clearInterval(this.state.interval)
    this.setState({ interval: null })
  }

  toggleInterval = () => {
    if (this.state.interval) {
      this.stopInterval()
    } else {
      this.startInterval()
    }
  }

  updateTickerValue = () => {
    this.setState({
      number: Math.ceil(Math.random() * 100)
    })
  }

  // When our app loads, get a new random number from 1 - 100 every second
  // On button click, stop/start the interval
  // set Ticker background to RED if the previous number is less than the current number
  // set Ticker background to GREEN if the previous number is greater than the current number
  // Don't forget to clean up the intervals if this component goes away!

  render() {
    return (
      <div className="box">
        <button onClick={this.toggleInterval}>{this.state.interval ? "Stop" : "Start"} Ticker</button>
        <Ticker number={this.state.number} color={this.state.color} />
      </div>
    )
  }
}

export default TickerContainer
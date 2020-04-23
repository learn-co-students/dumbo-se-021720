import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {
  state = {
    number: 0,
    currentInterval: null,
    color: "white"
  }

  componentDidMount() {
    const myInterval = setInterval(() => {
      console.log(this.state)
      this.setState({ number: Math.ceil(Math.random() * 100) })
    }, 1000)
    this.setState({ currentInterval: myInterval })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.number < this.state.number) {
      this.setState({ color: "green" })
    } else if (prevState.number > this.state.number) {
      this.setState({ color: "red" })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.currentInterval)
  }

  toggleInterval = () => {
    if (this.state.currentInterval) {
      clearInterval(this.state.currentInterval)
      this.setState({ currentInterval: null })
    } else {
      const myInterval = setInterval(() => {
        console.log(this.state)
        this.setState({ number: Math.ceil(Math.random() * 100) })
      }, 1000)
      this.setState({ currentInterval: myInterval })
    }
  }

  /*
    What do we need?

    componentDidMount()

    componentDidUpdate()

    componentWillUnmount()

    none of the above!
  */

  // set Ticker background to RED if the previous number is less than the current number
  // set Ticker background to GREEN if the previous number is greater than the current number
  // Don't forget to clean up the intervals if this component goes away!

  render() {
    this.toggleInterval() // this is bad!
    return (
      <div className="box" style={{ backgroundColor: this.state.color }}>
        <button onClick={this.toggleInterval}>Stop/Start Ticker</button>
        <Ticker number={this.state.number} />
      </div>
    )
  }
}

export default TickerContainer
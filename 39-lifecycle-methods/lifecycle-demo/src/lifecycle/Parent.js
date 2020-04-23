import React from 'react'
import Child from './Child'
import { getLoggingInfo } from '../utils/logger';

class Parent extends React.Component {
  constructor() {
    super()
    console.log(...getLoggingInfo(this))
  }

  state = {
    clicked: true
  }

  componentDidMount() {
    console.log(...getLoggingInfo(this))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(...getLoggingInfo(this), prevProps, prevState)
  }

  componentWillUnmount() {
    console.log(...getLoggingInfo(this))
  }

  toggle = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  render() {
    console.log(...getLoggingInfo(this))
    return (
      <div className="box">
        <button onClick={this.toggle}>Toggle</button>
        <p>Parent</p>
        {this.state.clicked ? <Child name="child" /> : null}
      </div>
    );

  }
}


export default Parent;
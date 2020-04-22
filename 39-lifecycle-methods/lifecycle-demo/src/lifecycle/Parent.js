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

  toggle = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  componentDidMount() {
    console.log(...getLoggingInfo(this))
  }

  componentDidUpdate() {
    console.log(...getLoggingInfo(this))
  }

  render() {
    console.log(...getLoggingInfo(this))
    return (
      <div className="box">
        <button onClick={this.toggle}>Click</button>
        <p>Parent</p>
        {this.state.clicked ? <Child name="child" /> : null}
      </div>
    );

  }
}


export default Parent;
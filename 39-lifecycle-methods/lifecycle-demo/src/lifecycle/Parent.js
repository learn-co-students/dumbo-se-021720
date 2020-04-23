import React from 'react'
import Child from './Child'
import { getLoggingInfo } from '../utils/logger';

class Parent extends React.Component {
  state = {
    clicked: true
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
        <Child name="child" />
      </div>
    );

  }
}


export default Parent;
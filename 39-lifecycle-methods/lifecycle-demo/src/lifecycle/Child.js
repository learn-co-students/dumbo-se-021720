import React from 'react'
import Grandchild from './Grandchild'
import { getLoggingInfo } from '../utils/logger';

class Child extends React.Component {

  render() {
    console.log(...getLoggingInfo(this))
    return (
      <div className="box">
        <p>Child {this.props.counter}</p>
        <Grandchild name="grandchild" />
      </div>
    );
  }
}

export default Child 
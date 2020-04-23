import React from 'react'
import Grandchild from './Grandchild'
import { getLoggingInfo } from '../utils/logger';

class Child extends React.Component {
  constructor() {
    super()
    console.log(...getLoggingInfo(this))
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

  render() {
    console.log(...getLoggingInfo(this))
    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild" />
      </div>
    );
  }
}

export default Child 
import React from 'react'
import { getLoggingInfo } from '../utils/logger';

class Grandchild extends React.Component {

  render() {
    console.log(...getLoggingInfo(this))
    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 
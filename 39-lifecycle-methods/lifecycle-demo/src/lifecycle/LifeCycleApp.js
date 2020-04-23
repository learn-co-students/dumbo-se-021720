import React from 'react'
import Parent from './Parent'

class LifeCycleApp extends React.Component {

  render() {
    return (
      <div>
        <Parent name="parent" />
      </div>
    )
  }
}

export default LifeCycleApp;

// parent contructor
// parent render
// child constructor
// child render
// grandchild constructor
// grandchild render
// grandchild mounts
// child mounts
// parent mounts

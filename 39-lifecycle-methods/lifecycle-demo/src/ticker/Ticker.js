import React from 'react'

const Ticker = props => {

  return (
    <div className="box" style={{ background: props.color }}>
      <h1>{props.number}</h1>
    </div>
  )
}

export default Ticker
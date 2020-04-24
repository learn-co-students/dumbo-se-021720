import React from 'react'
import HogDisplay from './HogDisplay'

const HogIndex = ({ hogs }) => {

  const renderHogs = () => {
    return hogs.map(hog => <HogDisplay key={hog.name} hog={hog} />)
  }

  return (
    <div>
      {renderHogs()}
    </div>
  )
}

export default HogIndex
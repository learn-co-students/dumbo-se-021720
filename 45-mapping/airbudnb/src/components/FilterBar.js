import React from 'react'

const FilterBar = ({ showMap, toggleShowMap, handleFourStarFilter }) => {

  return (
    <div className="filters">
      <button onClick={handleFourStarFilter}>
        <span className="rating">4★</span> Dog Houses
      </button>
      <button onClick={toggleShowMap}>
        {showMap ? "Hide" : "Show"} Map
      </button>
    </div>
  )
}

export default FilterBar
import React from 'react'

const FilterBar = ({ handleFourStarFilter }) => {

  return (
    <div>
      <button onClick={handleFourStarFilter}>
        <span className="rating">4★</span> Dog Houses
      </button>
    </div>
  )
}

export default FilterBar
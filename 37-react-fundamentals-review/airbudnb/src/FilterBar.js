import React from 'react'

const FilterBar = ({ handleFourStarFilter }) => {

  return (
    <div>
      <button onClick={handleFourStarFilter}>4★ Dog Houses</button>
    </div>
  )
}

export default FilterBar
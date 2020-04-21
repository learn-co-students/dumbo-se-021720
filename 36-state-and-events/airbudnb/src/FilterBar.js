import React from 'react'

const FilterBar = (props) => {
  console.log("in filter, props are", props)
  return (
    <div>
      <button onClick={props.handleFourStarFilter}>4★ Dog Houses</button>
    </div>
  )
}

export default FilterBar
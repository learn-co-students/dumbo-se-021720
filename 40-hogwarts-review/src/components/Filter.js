import React from 'react'

const Filter = props => {
  return (
    <div>
      <label>
        Only Greased?
        <input type="checkbox" value={props.onlyGreased} onChange={props.toggleGreased} />
      </label>
      <label>
        Sort by:
        <select value={props.sortBy} onChange={props.updateSort}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  )
}

export default Filter
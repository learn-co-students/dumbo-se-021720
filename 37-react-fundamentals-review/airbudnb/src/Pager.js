import React from 'react'

const Pager = props => {

  // how many doghouses we're displaying
  const buildPages = () => {
    const numPages = Math.ceil(props.dogHouseLength / 15)

    const pageButtons = []
    for (let pageIndex = 0; pageIndex < numPages; pageIndex++) {
      pageButtons.push(
        <button
          key={pageIndex}
          disabled={props.startIndex === pageIndex * 15}
          onClick={() => props.handleUpdateIndex(pageIndex * 15)}
        >{pageIndex + 1}</button>
      )
    }

    return pageButtons
  }

  return (
    <div className="pager">
      <button
        disabled={props.startIndex <= 0}
        onClick={() => props.handleUpdateIndex(props.startIndex - 15)}
      >Prev</button>
      {buildPages()}
      <button
        disabled={props.startIndex + 15 >= props.dogHouseLength}
        onClick={() => props.handleUpdateIndex(props.startIndex + 15)}
      >Next</button>
    </div>
  )
}

export default Pager
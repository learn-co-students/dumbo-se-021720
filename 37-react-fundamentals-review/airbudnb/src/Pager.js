import React from 'react'

const Pager = props => {

  // how many doghouses we're displaying
  const numPages = Math.ceil(props.dogHouseLength / 15)
  console.log("numPages:", numPages)

  const pageSpan = []
  for (let pageIndex = 0; pageIndex < numPages; pageIndex++) {
    pageSpan.push(<button
      key={pageIndex}
      disabled={props.startIndex === pageIndex * 15}
      onClick={() => props.handleUpdateIndex(pageIndex * 15)}
    >{pageIndex + 1}</button>)
  }

  return (
    <div className="pager">
      <button
        disabled={props.startIndex <= 0}
        onClick={() => props.handleUpdateIndex(props.startIndex - 15)}
      >Prev</button>
      {pageSpan}
      <button
        disabled={props.startIndex + 15 >= props.dogHouseLength}
        onClick={() => props.handleUpdateIndex(props.startIndex + 15)}
      >Next</button>
    </div>
  )
}

export default Pager
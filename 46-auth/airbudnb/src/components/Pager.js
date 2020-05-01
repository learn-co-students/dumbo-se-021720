import React from 'react'

const Pager = ({ total, startIndex, handleUpdateIndex }) => {

  const pageButtons = []

  const numPages = Math.ceil(total / 15)
  for (let pageIndex = 0; pageIndex < numPages; pageIndex++) {
    pageButtons.push(
      <button
        key={pageIndex}
        disabled={startIndex === pageIndex * 15}
        onClick={() => handleUpdateIndex(pageIndex * 15)}
      >{pageIndex + 1}</button>
    )
  }

  return (
    <div className="pager">
      <button
        disabled={startIndex <= 0}
        onClick={() => handleUpdateIndex(startIndex - 15)}
      >Prev</button>
      {pageButtons}
      <button
        disabled={startIndex + 15 >= total}
        onClick={() => handleUpdateIndex(startIndex + 15)}
      >Next</button>
    </div>
  )
}

export default Pager
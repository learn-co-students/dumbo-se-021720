
import React from 'react'

const Comments = ({ comments, comment, handleFormSubmit, handleUpdateComment }) => {
  return (
    <div>
      <h2>Comments:</h2>
      {comments.map(comment => <p key={comment}>{comment}</p>)}

      <hr />
      <h3>Leave a comment</h3>

      <form onSubmit={handleFormSubmit}>
        <input type="text" value={comment} onChange={handleUpdateComment} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Comments
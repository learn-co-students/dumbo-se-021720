
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Comments = () => {
  // kind of like mapStateToProps
  const { comments, comment } = useSelector(state => {
    return {
      comments: state.comments,
      comment: state.comment
    }
  })
  // gives access to the dispatch function for our store
  const dispatch = useDispatch()

  // const comment = useSelector(state => state.comment)
  console.log(comments, comment)

  const handleFormSubmit = e => {
    e.preventDefault()
    dispatch({ type: "ADD_COMMENT" })
  }

  return (
    <div>
      <h2>Comments:</h2>
      {comments.map(comment => <p key={comment}>{comment}</p>)}

      <hr />
      <h3>Leave a comment</h3>

      <form onSubmit={handleFormSubmit}>
        <input type="text" value={comment} onChange={e => dispatch({ type: "UPDATE_COMMENT", payload: e.target.value })} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Comments
import React from 'react'

class ListingReview extends React.Component {

  render() {
    return (
      <form>
        <label>Username:</label>
        <input type="text" name="username" />

        <label>Comment:</label>
        <textarea name="comment" />

        <label>Rating:</label>
        <select name="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ListingReview
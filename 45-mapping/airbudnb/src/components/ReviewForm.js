import React from 'react'

const initialState = {
  username: "",
  comment: "",
  rating: 1,
}

class ReviewForm extends React.Component {
  state = initialState

  handleInputChange = event => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(`http://localhost:3000/listings/${this.props.listingId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(updatedListing => {
        this.props.handleUpdateListing(updatedListing)
        this.setState(initialState)
      })
  }

  render() {
    const { username, comment, rating } = this.state
    return (
      <div className="form-container">
        <h4>Leave a Review</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Comment:</label>
          <textarea name="comment" onChange={this.handleInputChange} value={comment} />
          <label>Rating:</label>
          <select name="rating" onChange={this.handleInputChange} value={rating} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ReviewForm
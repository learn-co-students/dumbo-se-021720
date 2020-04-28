import React from 'react'

const initialState = {
  username: "",
  comment: "",
  rating: 1,
}

class ListingReview extends React.Component {
  state = initialState

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />

        <label>Comment:</label>
        <textarea name="comment" onChange={this.handleInputChange} value={this.state.comment} />

        <label>Rating:</label>
        <select name="rating" onChange={this.handleInputChange} value={this.state.rating} >
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
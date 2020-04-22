import React from 'react'


const initialState = {
  username: "",
  comment: "",
  rating: 1,
}

class ListingReview extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: "",
  //     comment: "",
  //     rating: 1,
  //   }
  // }
  // public class fields syntax

  // handleUsernameChange = event => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handleCommentChange = event => {
  //   this.setState({
  //     comment: event.target.value
  //   })
  // }

  state = initialState

  handleInputChange = event => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault() // still need this!

    // update the backend (make a POST request)
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


    // POST /listings/:listing_id/reviews
    // body: state

    // update the listing information in our component state
    // clear out the form
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
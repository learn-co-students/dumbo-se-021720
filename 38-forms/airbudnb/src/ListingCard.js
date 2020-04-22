import React from 'react'
import ListingReview from './ListingReview'

class ListingCard extends React.Component {

  state = {
    favorite: false,
    showReviewForm: false
  }

  toggleFavorite = () => {
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }))
  }

  toggleReviewForm = () => {
    this.setState(prevState => ({
      showReviewForm: !prevState.showReviewForm
    }))
  }

  render() {
    const { image, name, city, price, rating } = this.props.listing

    return (
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <button onClick={this.toggleFavorite} className="favorite">
            <span role="img" aria-label="heart">{this.state.favorite ? "♥️" : "♡"}</span>
          </button>
        </div>
        <div className="info">
          <span>{city}</span>
          <span>★ {rating}</span>
        </div>
        <h4 className="title">{name}</h4>
        <div className="price">
          <strong>${price}</strong>/month
        </div>
        <div className="reviews">
          <button onClick={this.toggleReviewForm}>{this.state.showReviewForm ? "Hide" : "Show"} Review Form</button>
          {this.state.showReviewForm && <ListingReview />}
        </div>
      </div>
    )
  }
}

export default ListingCard
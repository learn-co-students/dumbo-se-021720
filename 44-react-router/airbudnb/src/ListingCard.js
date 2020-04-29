import React from 'react'
import ListingReview from './ListingReview'

class ListingCard extends React.Component {

  state = {
    favorite: false,
    showForm: false
  }

  toggleFavorite = () => {
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }))
  }

  toggleReviewForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))
  }

  render() {
    const { handleUpdateListing } = this.props
    const { id, image, name, city, price, rating } = this.props.listing
    const { favorite, showForm } = this.state

    return (
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <button onClick={this.toggleFavorite} className="favorite">
            <span role="img" aria-label="heart">{favorite ? "♥️" : "♡"}</span>
          </button>
        </div>
        <div className="info">
          <span>{city}</span>
          <span className="rating">★ {rating}</span>
        </div>
        <h4 className="title">{name}</h4>
        <div className="price">
          <strong>${price}</strong>/month
        </div>
        <div className="reviews">
          <button onClick={this.toggleReviewForm}>{showForm ? "Hide" : "Show"} Review Form</button>
          {showForm && <ListingReview listingId={id} handleUpdateListing={handleUpdateListing} />}
        </div>
      </div>
    )
  }
}

export default ListingCard
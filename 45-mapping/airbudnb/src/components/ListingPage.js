import React from 'react'
import LoadingSpinner from './LoadingSpinner'
import ReviewForm from './ReviewForm'
import Review from './Review'

class ListingPage extends React.Component {

  state = {
    listing: null,
    loaded: false
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    fetch(`http://localhost:3000/listings/${this.props.match.params.id}`)
      .then(r => r.json())
      .then(listing => {
        this.setState({
          listing: listing,
          loaded: true
        })
      })
  }

  handleUpdateListing = listing => {
    this.setState({ listing })
  }

  render() {
    console.log(this.props)
    if (!this.state.loaded) {
      return <LoadingSpinner />
    }

    const { favorite = false, reviews, city, rating, name, price, image, id } = this.state.listing

    return (
      <div className="detail">
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <button onClick={this.toggleFavorite} className="favorite">
            <span role="img" aria-label="heart">{favorite ? "♥️" : "♡"}</span>
          </button>
        </div>
        <h2 className="title">{name}</h2>
        <div className="info">
          <span>{city}</span>
          &nbsp;·&nbsp;
          <strong>${price}</strong>/month
        </div>
        <div className="reviews">
          <h4>
            <span className="rating">★</span>
            &nbsp;
            <span>{rating} ({reviews.length} reviews)</span>
          </h4>
          {reviews.map(review => <Review key={review.id} {...review} />)}
        </div>
        <ReviewForm listingId={id} handleUpdateListing={this.handleUpdateListing} />
      </div>
    )
  }
}

export default ListingPage
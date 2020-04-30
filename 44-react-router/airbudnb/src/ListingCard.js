import React from 'react'
import { Link } from 'react-router-dom'

class ListingCard extends React.Component {

  state = {
    favorite: false
  }

  toggleFavorite = () => {
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }))
  }

  render() {
    const { id, image, name, city, price, rating } = this.props.listing
    const { favorite } = this.state

    return (
      <div className="card">
        <Link to={`/listings/${id}`}>
          <div className="image" style={{ backgroundImage: `url(${image})` }}>
            <button onClick={this.toggleFavorite} className="favorite">
              <span role="img" aria-label="heart">{favorite ? "♥️" : "♡"}</span>
            </button>
          </div>
        </Link>
        <div className="info">
          <span>{city}</span>
          <span className="rating">★ {rating}</span>
        </div>
        <h4 className="title">{name}</h4>
        <div className="price">
          <strong>${price}</strong>/month
        </div>
      </div>
    )
  }
}

export default ListingCard
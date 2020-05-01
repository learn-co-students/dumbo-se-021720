import React from 'react'
import { API_URL } from '../constants'

class ListingCard extends React.Component {

  toggleFavorite = event => {
    event.stopPropagation()

    if (!this.props.listing.favorite) {
      fetch(API_URL + `/listings/${this.props.listing.id}/favorites`, {
        method: "POST",
        credentials: "include"
      })
        .then(r => r.json())
        .then(listing => this.props.handleUpdateListing(listing))
    } else {
      fetch(API_URL + `/listings/${this.props.listing.id}/favorites/remove`, {
        method: "DELETE",
        credentials: "include"
      })
        .then(r => r.json())
        .then(listing => this.props.handleUpdateListing(listing))
    }
  }

  render() {
    const { id, image, name, city, price, rating, favorite } = this.props.listing

    return (
      <div className="card" onClick={() => this.props.showDetail(id)}>
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          <button onClick={this.toggleFavorite} className="favorite">
            <span role="img" aria-label="heart">{favorite ? "♥️" : "♡"}</span>
          </button>
        </div>
        <div className="details">
          <div className="info">
            <span>{city}</span>
            <span className="rating">★ {rating}</span>
          </div>
          <h4 className="title">{name}</h4>
          <div className="price">
            <strong>${price}</strong>/month
        </div>
        </div>
      </div>
    )
  }
}

export default ListingCard
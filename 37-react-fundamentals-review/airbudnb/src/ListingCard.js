import React from 'react'

const ListingCard = props => {
  // destructuring the props object (we could also do the destructuring directly to the argument of the ListingCard fn)
  const { image, name, city, rating, price } = props

  return (
    <div className="card">
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <button className="favorite">
          <span role="img" aria-label="heart">♡</span>
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
    </div>
  )
}

export default ListingCard
import React from 'react'

class ListingCard extends React.Component {

  state = {
    favorite: true
  }




  toggleFavorite = () => {
    // arrow fn
    // const implicit = () => ({ key: "value" })
    // const explicit = () => {
    //   return { key: "value" }
    // }

    // this is best practice if your next state depends on prev state
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }))

    // this will generally work
    // this.setState({ favorite: !this.state.favorite })
  }

  render() {
    // destructuring the props object (we could also do the destructuring directly to the argument of the ListingCard fn)
    const { image, name, city, rating, price } = this.props

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
      </div>
    )
  }
}

export default ListingCard
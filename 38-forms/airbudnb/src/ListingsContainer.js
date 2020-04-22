import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'
import Pager from './Pager'

class ListingsContainer extends React.Component {

  // initial state
  state = {
    fourStarOnly: false,
    startIndex: 0,
    listings: []
  }

  // Event handlers
  handleFourStarFilter = () => {
    this.setState({
      fourStarOnly: !this.state.fourStarOnly,
      startIndex: 0
    })
  }

  handleFetch = () => {
    fetch("http://localhost:3000/listings")
      .then(r => r.json())
      .then(listings => {
        this.setState({ listings: listings })
      })
  }

  handleUpdateIndex = startIndex => {
    this.setState({ startIndex: startIndex })
  }

  getFilteredListings() {
    let listingsToDisplay = this.state.listings
    if (this.state.fourStarOnly) {
      listingsToDisplay = listingsToDisplay.filter(listing => listing.rating >= 4)
    }
    return listingsToDisplay
  }

  renderCards() {
    return this.getFilteredListings()
      .slice(this.state.startIndex, this.state.startIndex + 15)
      .map(listing => <ListingCard key={listing.id} listing={listing} />)
  }

  render() {
    console.log("in ListingsContainer, state:", this.state)
    return (
      <main>
        <h1>
          Show Me Some Listings: <button onClick={this.handleFetch}>Show</button>
        </h1>
        <FilterBar handleFourStarFilter={this.handleFourStarFilter} />
        <section className="listings">
          {this.renderCards()}
        </section>
        <Pager
          startIndex={this.state.startIndex}
          total={this.getFilteredListings().length}
          handleUpdateIndex={this.handleUpdateIndex}
        />
      </main>
    )
  }
}

export default ListingsContainer
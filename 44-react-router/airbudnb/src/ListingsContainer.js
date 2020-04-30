import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'
import Pager from './Pager'
import LoadingSpinner from './LoadingSpinner'

class ListingsContainer extends React.Component {

  // initial state
  state = {
    fourStarOnly: false,
    startIndex: 0,
    listings: [],
    loaded: false
  }

  componentDidMount() {
    this.fetchListings()
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.setState({ loaded: false })
      this.fetchListings()
    }
  }

  fetchListings() {
    fetch(`http://localhost:3000/listings/search?city=${this.props.searchTerm}`)
      .then(r => r.json())
      .then(listings => {
        this.setState({
          listings: listings,
          startIndex: 0,
          loaded: true
        })
      })
  }

  // Event handlers
  handleFourStarFilter = () => {
    this.setState(prevState => ({
      fourStarOnly: !prevState.fourStarOnly,
      startIndex: 0
    }))
  }

  handleUpdateIndex = startIndex => {
    this.setState({ startIndex: startIndex })
  }

  getFilteredListings() {
    let listingsToDisplay = this.state.listings
    // filter based on fourStarRating filter (from state)
    if (this.state.fourStarOnly) {
      listingsToDisplay = listingsToDisplay.filter(listing => listing.rating >= 4)
    }
    return listingsToDisplay
  }

  getListingCards(listings) {
    return listings
      .slice(this.state.startIndex, this.state.startIndex + 15)
      .map(listing => <ListingCard key={listing.id} listing={listing} />)
  }

  render() {
    if (!this.state.loaded) {
      return <LoadingSpinner />
    }

    const filteredListings = this.getFilteredListings()
    const listingsToRender = this.getListingCards(filteredListings)

    return (
      <>
        <FilterBar handleFourStarFilter={this.handleFourStarFilter} />
        <section className="listings">
          {listingsToRender}
        </section>
        <Pager
          startIndex={this.state.startIndex}
          total={filteredListings.length}
          handleUpdateIndex={this.handleUpdateIndex}
        />
      </>
    )
  }
}

export default ListingsContainer
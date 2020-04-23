import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'
import Pager from './Pager'

class ListingsContainer extends React.Component {

  // initial state
  state = {
    fourStarOnly: false,
    startIndex: 0,
    listings: [],
    loaded: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/listings/search?city=${this.props.searchTerm}`)
      .then(r => r.json())
      .then(listings => {
        this.setState({
          listings: listings,
          loaded: true
        })
      })
  }

  componentDidUpdate(prevProps) {
    console.log("update", this.props, prevProps)

    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.setState({ loaded: false })

      fetch(`http://localhost:3000/listings/search?city=${this.props.searchTerm}`)
        .then(r => r.json())
        .then(listings => {
          this.setState({
            listings: listings,
            loaded: true
          })
        })
    }
  }

  // Event handlers
  handleFourStarFilter = () => {
    this.setState({
      fourStarOnly: !this.state.fourStarOnly,
      startIndex: 0
    })
  }

  handleUpdateIndex = startIndex => {
    this.setState({ startIndex: startIndex })
  }

  handleUpdateListing = updatedListing => {
    // update ONLY the one object in our listings in state that has changed
    const updatedListings = this.state.listings.map(listing => {
      if (listing.id === updatedListing.id) {
        return updatedListing
      } else {
        return listing
      }
    })

    this.setState({ listings: updatedListings })
  }

  getFilteredListings() {
    // filter based on search term (from props)
    // let listingsToDisplay = this.state.listings.filter(listing => {
    //   return listing.city.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    // })
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
      .map(listing => <ListingCard key={listing.id} listing={listing} handleUpdateListing={this.handleUpdateListing} />)
  }

  render() {
    console.log("in ListingsContainer, state:", this.state)
    if (!this.state.loaded) {
      return (
        <h1>Loading...</h1>
      )
    }


    const filteredListings = this.getFilteredListings()
    const listingsToRender = this.getListingCards(filteredListings)

    return (
      <main>
        <FilterBar handleFourStarFilter={this.handleFourStarFilter} />
        <section className="listings">
          {listingsToRender}
        </section>
        <Pager
          startIndex={this.state.startIndex}
          total={filteredListings.length}
          handleUpdateIndex={this.handleUpdateIndex}
        />
      </main>
    )
  }
}

export default ListingsContainer
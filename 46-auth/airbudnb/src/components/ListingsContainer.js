import React from 'react'
import ListingCard from './ListingCard'
import ListingMap from './ListingMap'
import FilterBar from './FilterBar'
import Pager from './Pager'
import LoadingSpinner from './LoadingSpinner'

import { API_URL } from '../constants'

class ListingsContainer extends React.Component {

  // initial state
  state = {
    fourStarOnly: false,
    startIndex: 0,
    listings: [],
    showMap: true,
    loaded: false
  }

  componentDidMount() {
    this.fetchListings()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.city !== prevProps.match.params.city) {
      this.setState({ loaded: false })
      this.fetchListings()
    }
  }

  fetchListings() {
    const city = this.props.match.params.city || ""
    fetch(API_URL + `/listings/search?city=${city}`, {
      credentials: "include"
    })
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
  toggleShowMap = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }

  handleFourStarFilter = () => {
    this.setState(prevState => ({
      fourStarOnly: !prevState.fourStarOnly,
      startIndex: 0
    }))
  }

  handleUpdateIndex = startIndex => {
    this.setState({ startIndex: startIndex })
  }

  handleUpdateListing = updatedListing => {
    const updatedListings = this.state.listings.map(listing => {
      if (updatedListing.id === listing.id) {
        return updatedListing
      } else {
        return listing
      }
    })

    this.setState({
      listings: updatedListings
    })
  }

  showDetail = id => {
    this.props.history.push(`/listings/${id}`)
  }

  getFilteredListings() {
    let listingsToDisplay = this.state.listings
    // filter based on fourStarRating filter (from state)
    if (this.state.fourStarOnly) {
      listingsToDisplay = listingsToDisplay.filter(listing => listing.rating >= 4)
    }
    return listingsToDisplay
  }

  getPagedListings(listings) {
    return listings.slice(this.state.startIndex, this.state.startIndex + 15)
  }

  getListingCards(listings) {
    return listings
      .map(listing => <ListingCard key={listing.id} listing={listing} showDetail={this.showDetail} handleUpdateListing={this.handleUpdateListing} />)
  }

  render() {
    if (!this.state.loaded) {
      return <LoadingSpinner />
    }

    const filteredListings = this.getFilteredListings()
    const pagedListings = this.getPagedListings(filteredListings)
    const listingCards = this.getListingCards(pagedListings)

    return (
      <>
        <FilterBar
          handleFourStarFilter={this.handleFourStarFilter}
          showMap={this.state.showMap}
          toggleShowMap={this.toggleShowMap}
        />
        {this.state.showMap ? (
          <section className="map-listings">
            <div className="details">
              {listingCards}
            </div>
            <ListingMap listings={pagedListings} showDetail={this.showDetail} handleUpdateListing={this.handleUpdateListing} />
          </section>
        ) : (
            <section className="listings">
              {listingCards}
            </section>
          )}

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
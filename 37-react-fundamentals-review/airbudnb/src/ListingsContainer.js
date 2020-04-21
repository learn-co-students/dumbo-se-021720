import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'
import Pager from './Pager'

// temporary until we can fetch
// import dogHouses from './db.json'

class ListingsContainer extends React.Component {

  // initial state
  state = {
    fourStarOnly: false,
    startIndex: 0,
    dogHouses: []
  }

  // Event handlers
  handleFourStarFilter = () => {
    this.setState({
      fourStarOnly: !this.state.fourStarOnly,
      startIndex: 0
    })
  }

  handleFetch = () => {
    // fetch GET /listings
    fetch("http://localhost:3001/listings")
      .then(r => r.json())
      .then(listings => {
        this.setState({ dogHouses: listings })
      })
  }

  handleUpdateIndex = newIndex => {
    this.setState({ startIndex: newIndex })
  }

  // handleDecreaseIndex = () => {
  //   this.setState({ startIndex: this.state.startIndex - 15 })
  // }

  // handleIncreaseIndex = () => {
  //   this.setState({ startIndex: this.state.startIndex + 15 })
  // }

  getFilteredDoghouses() {
    let dogHousesToDisplay = this.state.dogHouses
    if (this.state.fourStarOnly) {
      dogHousesToDisplay = dogHousesToDisplay.filter(dogHouse => dogHouse.rating >= 4)
    }
    return dogHousesToDisplay
  }

  renderCards() {
    return this.getFilteredDoghouses()
      .slice(this.state.startIndex, this.state.startIndex + 15) // just take 15
      .map(dogHouse => (
        <ListingCard key={dogHouse.id}
          name={dogHouse.name}
          city={dogHouse.city}
          rating={dogHouse.rating}
          price={dogHouse.price}
          image={dogHouse.image}
          favorite={dogHouse.favorite}
        />
      ))
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
          dogHouseLength={this.getFilteredDoghouses().length}
          handleUpdateIndex={this.handleUpdateIndex}
        />
      </main>
    )
  }
}

export default ListingsContainer
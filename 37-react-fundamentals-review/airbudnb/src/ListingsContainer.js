import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'

// temporary until we can fetch
// import dogHouses from './db.json'

class ListingsContainer extends React.Component {

  // initial state
  state = {
    fourStarOnly: false,
    startIndex: 0
  }

  // Event handlers
  handleFourStarFilter = () => {
    this.setState({
      fourStarOnly: !this.state.fourStarOnly,
      startIndex: 0
    })
  }

  // TODO: refactor to one updateIndex fn
  handleDecreaseIndex = () => {
    this.setState({ startIndex: this.state.startIndex - 15 })
  }

  handleIncreaseIndex = () => {
    this.setState({ startIndex: this.state.startIndex + 15 })
  }

  getFilteredDoghouses() {
    let dogHousesToDisplay = dogHouses
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
        {/* TODO: refactor to a pager component */}
        <div className="pager">
          <button disabled={this.state.startIndex <= 0} onClick={this.handleDecreaseIndex}>Prev</button>
          <button disabled={this.state.startIndex + 15 >= this.getFilteredDoghouses().length} onClick={this.handleIncreaseIndex}>Next</button>
        </div>
      </main>
    )
  }
}

export default ListingsContainer
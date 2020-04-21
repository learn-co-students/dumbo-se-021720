import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'

import dogHouses from './db.json' // temporary until we can fetch

class ListingsContainer extends React.Component {

  renderCards() {
    // return for renderCards
    return dogHouses.map(dogHouse => {
      // return for map
      return (
        <ListingCard key={dogHouse.id}
          name={dogHouse.name}
          city={dogHouse.city}
          rating={dogHouse.rating}
          price={dogHouse.price}
          image={dogHouse.image}
          favorite={dogHouse.favorite}
        />
      )
    })
  }

  render() {
    return (
      <main>
        <h3>
          Click Counter: 0 clicks
          <button>Click Me</button>
        </h3>
        <FilterBar />
        <section className="listings">
          {this.renderCards()}
        </section>
      </main>
    )
  }
}

export default ListingsContainer
import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'

import dogHouses from './db.json' // temporary until we can fetch

const ListingsContainer = props => {

  // [{}, {}, {}] -> [<ListingCard />]
  const renderCards = () => {
    const filteredDogHouse = dogHouses.filter(house => house.city === "New York")
    return filteredDogHouse.map(dogHouse => {
      return (
        <ListingCard key={dogHouse.id}
          name={dogHouse.name}
          city={dogHouse.city}
          rating={dogHouse.rating}
          price={dogHouse.price}
          image={dogHouse.image}
        />
      )
    })
  }

  // React
  return (
    <div>
      <h1>ListingsContainer</h1>
      <FilterBar />
      {renderCards()}

      {/* <ListingCard
        name={firstDogHouse.name}
        city={firstDogHouse.city}
        rating={firstDogHouse.rating}
        price={firstDogHouse.price}
        image={firstDogHouse.image}
      /> */}
    </div>
  )
}

export default ListingsContainer
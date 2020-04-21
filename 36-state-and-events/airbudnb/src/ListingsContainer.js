import React from 'react'
import ListingCard from './ListingCard'
import FilterBar from './FilterBar'

import dogHouses from './db.json' // temporary until we can fetch

class ListingsContainer extends React.Component {

  // initial state
  state = {
    count: 0,
    whatever: true
  }

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

  // class public fields
  beef = "yum"

  handleButtonClick = (event) => {
    // console.log("during click", event)
    // console.log("in handleButtonClick, this is", this)

    // NONO NEVER DO THIS
    // this.state.count = this.state.count + 1

    // this is the right way
    console.log("before setState called", this.state.count)

    // async, doesn't run immediately
    // this.setState({ count: this.state.count + 1 }, () => {
    //   // callback will run after setState has been called
    //   console.log("after setState called", this.state.count)
    // })

    // prevState.count = 0
    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // // prevState.count = 1
    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // // prevState.count = 2
    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })

    // will work 98% percent of the time
    this.setState({ count: this.state.count + 1 })

    // this.setState({ count: 1 })
    // this.setState({ count: 1 })


    // if you need to get around the event nullifying:
    // save to a variable
    // const eventTarget = event.target
    // or
    // event.persist()

    // setTimeout(() => {
    //   console.log("1 second later", eventTarget)
    // }, 1000)
  }

  render() {
    console.log("in render, state is", this.state)
    return (
      <main>
        <h3>
          Click Counter: {this.state.count} clicks
          <button onClick={this.handleButtonClick}>Click Me</button>
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
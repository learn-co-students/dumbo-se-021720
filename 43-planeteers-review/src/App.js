import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const API = "http://localhost:4000/planeteers"
class App extends React.Component {
  state = {
    planeteers: [],
    searchTerm: "",
    sortedByAge: true
  }

  // need a callback passed from app
  // that will take an id as an arg and 
  // use that to remove from the array in state
  handleDeletePlaneteer = id => {
    // optimistic


    fetch(API + '/' + id, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => {
        // pessimistic
        const newPlaneteers = this.state.planeteers.filter(planeteer => {
          return id !== planeteer.id
        })

        this.setState({
          planeteers: newPlaneteers
        })
      })

  }

  // POST /planeteers (database will create ID)
  handleGetRandomPlaneteer = (randomPlaneteer) => {

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(randomPlaneteer)
    })
      .then(r => r.json())
      .then(newPlaneteer => {

        this.setState({
          planeteers: [newPlaneteer, ...this.state.planeteers]
        })

      })

  }

  handleSortedByAge = (event) => {
    this.setState({ sortedByAge: event.target.checked })
  }

  handleUpdateSearch = value => {
    this.setState({
      searchTerm: value
    })
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then((planeteers) => {
        // this.state.planeteers = planeteers
        this.setState({
          planeteers: planeteers
        })
      })
  }

  // we'll want to dynamically render the list of 
  // Planeteers whose name or bio include the letters 
  // that are being typed.

  render() {
    console.log(this.state.planeteers)

    return (
      <div>
        <Header />
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={this.handleUpdateSearch}
          sortedByAge={this.state.sortedByAge}
          handleSortedByAge={this.handleSortedByAge}
        />
        <RandomButton handleGetRandomPlaneteer={this.handleGetRandomPlaneteer} />
        <PlaneteersContainer
          handleDeletePlaneteer={this.handleDeletePlaneteer}
          searchTerm={this.state.searchTerm.toLowerCase()}
          sortedByAge={this.state.sortedByAge}
          planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;

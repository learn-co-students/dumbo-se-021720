import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers: [],
    searchString: "",
    sortOn: false
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
    .then(resp => resp.json())
    .then(planeteersArray => this.setState({planeteers: planeteersArray}))
  }

  filteredPlaneteers() {
    // console.log("filtering...");
    let filteredPlaneteers = [ ...this.state.planeteers ]

    console.log("before filter and sort", filteredPlaneteers);

    // filter
    filteredPlaneteers = filteredPlaneteers.filter(planeteer => {
      const planeteerContent = planeteer.name + planeteer.bio
      return planeteerContent.toLowerCase().includes(this.state.searchString.toLowerCase())
    })

    console.log("filtered?", filteredPlaneteers);

    // sort if checked
    if (this.state.sortOn) {
      filteredPlaneteers.sort((a, b) => b.born - a.born)
    }

    console.log("sorted by age?", filteredPlaneteers);
    return filteredPlaneteers
  }

  handleFilterChange = (event) => {
    this.setState({
      searchString: event.target.value
    })
  }

  addRandomPlaneteer = planeteer => {
    fetch('http://localhost:4000/planeteers', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(planeteer)
    })
    .then(resp => resp.json())
    .then(planeteer => {
      this.setState(prevState => ({
        planeteers: [...prevState.planeteers, planeteer]
      }))
    })
  }

  deletePlaneteer = planeteerId => {
    console.log("deleting", planeteerId);
    fetch(`http://localhost:4000/planeteers/${planeteerId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      this.setState(prevState => {
        const filteredPlaneteers = prevState.planeteers.filter(planeteer => {
          return planeteer.id !== planeteerId
        })
        return {
          planeteers: filteredPlaneteers
        }
      }
    )
    })
  }

  toggleSort = () => {
    this.setState(prevState => ({
      sortOn: !prevState.sortOn
    }))
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar
          handleFilterChange={this.handleFilterChange}
          searchString={this.state.searchString}
          toggleSort={this.toggleSort}
          sortOn={this.state.sortOn}
          />
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer}/>
        <PlaneteersContainer deletePlaneteer={this.deletePlaneteer} planeteers={this.filteredPlaneteers()} />
      </div>
    );
  }

}

export default App;

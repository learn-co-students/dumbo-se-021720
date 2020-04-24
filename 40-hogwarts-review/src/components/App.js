import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from "./HogIndex";

class App extends Component {
  state = {
    hogs: hogs,
    onlyGreased: false,
    sortBy: "weight"
  }

  updateSort = e => {
    this.setState({ sortBy: e.target.value })
  }

  toggleGreased = e => {
    this.setState({ onlyGreased: e.target.checked })
  }

  getFilteredHogs = () => {
    let filteredHogs = [...this.state.hogs]
    if (this.state.onlyGreased) {
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    }
    return filteredHogs
  }

  getSortedHogs(hogs) {
    if (this.state.sortBy === "name") {
      return hogs.sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)
      })
    } else if (this.state.sortBy === "weight") {
      hogs.sort((hogA, hogB) => {
        // high to low
        return hogB.weight - hogA.weight
        // low to high
        // return hogA.weight - hogB.weight
      })
    }


    return hogs
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const filteredHogs = this.getFilteredHogs()
    const sortedHogs = this.getSortedHogs(filteredHogs)

    return (
      <div className="App">
        <Nav
          onlyGreased={this.state.onlyGreased}
          toggleGreased={this.toggleGreased}
          sortBy={this.state.sortBy}
          updateSort={this.updateSort}
        />
        <HogIndex hogs={sortedHogs} />
      </div>
    );
  }
}

export default App;

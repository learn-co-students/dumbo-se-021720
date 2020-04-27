import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    budget: 50
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushis => {

        const updatedSushis = sushis.map(sushi => {
          return {
            ...sushi,
            eaten: false
          }
        })

        this.setState({
          sushis: updatedSushis
        })
      })
  }

  handleEatSushi = (eatenSushi) => {
    if (!eatenSushi.eaten && this.state.budget >= eatenSushi.price) {
      const updatedSushis = this.state.sushis.map(sushi => {
        if (sushi === eatenSushi) {
          return {
            ...sushi,
            eaten: true
          }
        } else {
          return sushi
        }
      })

      this.setState(prevState => {
        return {
          sushis: updatedSushis,
          budget: prevState.budget - eatenSushi.price
        }
      })
    } else {
      alert("no.")
    }
  }

  render() {
    console.log("In app, state:", this.state)

    const plates = this.state.sushis.filter(sushi => sushi.eaten)
    console.log(plates)

    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          handleEatSushi={this.handleEatSushi}
        />
        <Table plates={plates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
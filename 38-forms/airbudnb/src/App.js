import React from 'react';
import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';

class App extends React.Component {
  state = {
    searchTerm: "New York"
  }

  handleUpdateSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    console.log("in App, state:", this.state)
    return (
      <>
        <NavBar searchTerm={this.state.searchTerm} handleUpdateSearch={this.handleUpdateSearch} />
        <ListingsContainer searchTerm={this.state.searchTerm} />
      </>
    );
  }
}

export default App;

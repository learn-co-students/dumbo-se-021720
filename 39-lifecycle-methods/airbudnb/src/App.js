import React from 'react';
import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';

class App extends React.Component {
  state = {
    searchTerm: ""
  }

  handleUpdateSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    console.log("in App, state:", this.state)

    const { searchTerm } = this.state
    return (
      <>
        <NavBar searchTerm={searchTerm} handleUpdateSearch={this.handleUpdateSearch} />
        <ListingsContainer searchTerm={searchTerm} />
      </>
    );
  }
}

export default App;

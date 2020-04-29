import React from 'react';
import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';
import ListingPage from './ListingPage';

class App extends React.Component {
  state = {
    searchTerm: ""
  }

  handleUpdateSearch = searchTerm => {
    this.setState({ searchTerm: searchTerm })
  }

  render() {
    console.log("in App, state:", this.state)

    const { searchTerm } = this.state
    return (
      <>
        <NavBar handleUpdateSearch={this.handleUpdateSearch} />
        <main>
          {/* <ListingsContainer searchTerm={searchTerm} /> */}
          <ListingPage />
        </main>
      </>
    );
  }
}

export default App;

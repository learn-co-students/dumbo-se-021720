import React from 'react';
import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';
import ListingPage from './ListingPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class App extends React.Component {
  state = {
    searchTerm: "",
    page: "listings"
  }

  handleUpdateSearch = searchTerm => {
    this.setState({ searchTerm: searchTerm })
  }

  getPage() {
    switch (this.state.page) {
      case "listings":
        return <ListingsContainer searchTerm={this.state.searchTerm} />
      case "detail":
        return <ListingPage />
      case "login":
        return <LoginForm />
      case "signup":
        return <SignupForm />
      default:
        return <h1>404</h1>
    }
  }

  render() {
    console.log("in App, state:", this.state)

    return (
      <>
        <NavBar handleUpdateSearch={this.handleUpdateSearch} />
        <main>
          {this.getPage()}
        </main>
      </>
    );
  }
}

export default App;

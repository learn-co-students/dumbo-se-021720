import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';
import ListingPage from './ListingPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class App extends React.Component {
  state = {
    searchTerm: ""
  }

  handleUpdateSearch = searchTerm => {
    this.setState({ searchTerm: searchTerm })
  }

  render() {
    console.log("in App, state:", this.state)

    return (
      <>
        <NavBar
          handleUpdateSearch={this.handleUpdateSearch}
        />
        <main>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route exact path="/listings" render={() => <ListingsContainer searchTerm={this.state.searchTerm} />} />
            <Route path="/listings/:id" render={(routeProps) => <ListingPage {...routeProps} searchTerm={this.state.searchTerm} />} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;

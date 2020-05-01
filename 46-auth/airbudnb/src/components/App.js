import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';
import ListingPage from './ListingPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { API_URL } from '../constants'

class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    fetch(API_URL + "/autologin", {
      credentials: "include"
    })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => this.setState({ currentUser: user }))
      .catch(console.error)
  }

  handleUpdateCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  handleUpdateSearch = searchTerm => {
    this.props.history.push(`/listings/search/${encodeURIComponent(searchTerm)}`)
  }

  render() {
    console.log("In app", this.state)

    return (
      <>
        <NavBar
          handleUpdateCurrentUser={this.handleUpdateCurrentUser}
          handleUpdateSearch={this.handleUpdateSearch}
          currentUser={this.state.currentUser}
        />
        <main>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/login" render={routeProps => <LoginForm {...routeProps} handleUpdateCurrentUser={this.handleUpdateCurrentUser} />} />
            <Route path="/signup" render={routeProps => <SignupForm {...routeProps} handleUpdateCurrentUser={this.handleUpdateCurrentUser} />} />
            {this.state.currentUser && (
              <>
                <Route path="/listings/search/:city" render={routeProps => <ListingsContainer {...routeProps} />} />
                <Route path="/listings/:id" render={routeProps => <ListingPage {...routeProps} />} />
                <Route exact path="/listings" render={routeProps => <ListingsContainer {...routeProps} />} />
              </>
            )}
          </Switch>
        </main>
      </>
    );
  }
}

export default withRouter(App);

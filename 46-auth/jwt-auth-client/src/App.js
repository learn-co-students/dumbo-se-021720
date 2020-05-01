import React from 'react'
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

class App extends React.Component {
  state = {
    currentUser: null
  }

  // when the app component mounts, 
  // make a fetch to check if the user is already logged in 
  // (ie, do they have a valid session in their cookies)
  componentDidMount() {
    const token = localStorage.token
    if (token) {
      // get user info
      fetch("http://localhost:3000/autologin", {
        headers: {
          "Authorization": token
        }
      })
        .then(r => {
          if (!r.ok) {
            return r.json().then(err => {
              throw err
            })
          }

          return r.json()
        })
        .then(currentUser => {
          this.setState({ currentUser }, () => {
            this.props.history.push('/home')
          })
        })
        .catch(err => console.error(err))
    }
  }

  // set current user, then redirect to home page
  setCurrentUser = ({ user, token }) => {
    this.setState({ currentUser: user }, () => {
      this.props.history.push('/home')
      localStorage.token = token
    })
  }

  handleLogout = () => {
    this.setState({ currentUser: null }, () => {
      this.props.history.push('/')
      localStorage.removeItem("token")
    })
  }

  render() {
    console.log("In App, state:", this.state)
    return (
      <>
        <header>
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            {this.state.currentUser ? (
              <button onClick={this.handleLogout}>Logout</button>
            ) : (
                <>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/signup">
              <SignUp setCurrentUser={this.setCurrentUser} />
            </Route>
            <Route path="/login">
              <Login setCurrentUser={this.setCurrentUser} />
            </Route>
            <Route path="/home">
              {this.state.currentUser ? <h1>Welcome, {this.state.currentUser.username}</h1> : <Redirect to='/' />}
            </Route>
            <Route path="/">
              <h1>Please Login or Sign Up</h1>
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default withRouter(App);

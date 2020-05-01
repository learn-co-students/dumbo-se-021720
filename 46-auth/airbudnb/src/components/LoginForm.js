import React from 'react'
import { API_URL } from '../constants'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // create a user
    fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(this.state)
    })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => {
        // this is our redirect
        this.props.history.push("/listings")
        this.props.handleUpdateCurrentUser(user)
      })
      .catch(console.error)

  }

  render() {
    const { username, password } = this.state
    return (
      <div className="form-container">
        <h3>Login to your account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginForm
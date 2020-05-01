import React from 'react'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = e => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(user => {
        this.props.setCurrentUser(user)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="current-password" />
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login
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
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => {
        if (!r.ok) {
          return r.json().then(err => {
            throw err
          })
        }

        return r.json()
      })
      .then(({ user, token }) => {
        this.props.setCurrentUser({ user, token })
      })
      .catch(err => console.error(err))
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
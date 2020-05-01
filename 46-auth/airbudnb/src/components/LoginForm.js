import React from 'react'

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
    // TODO: when we get to auth, make this work

    // this is our redirect
    this.props.history.push("/listings")
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
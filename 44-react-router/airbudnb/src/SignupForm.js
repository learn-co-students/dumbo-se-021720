import React from 'react'

class SignUpForm extends React.Component {
  state = {
    username: "",
    password: "",
    password_confirmation: ""
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // TODO: when we get to auth, make this work
  }

  render() {
    const { username, password, password_confirmation } = this.state
    return (
      <div className="form-container">
        <h3>Sign up for an account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <label>Confirm Password:</label>
          <input type="password" name="password_confirmation" onChange={this.handleInputChange} value={password_confirmation} />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUpForm
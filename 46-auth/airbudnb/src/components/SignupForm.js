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
    if (this.state.password === this.state.password_confirmation) {

      // create a user
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(r => r.json())
        .then(user => this.props.handleUpdateCurrentUser(user))

    } else {
      alert("passwords don't match")
    }

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
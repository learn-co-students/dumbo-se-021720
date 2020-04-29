import React from 'react'

const initialState = {
  username: "",
  password: ""
}

class LoginForm extends React.Component {
  state = initialState

  handleInputChange = event => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // TODO: when we get to auth, make this work
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginForm
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
    // create a user
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(this.state)
    })
      .then(r => {
        return r.json()
        // if (r.ok) {
        //   return r.json()
        // } else {
        //   throw r
        // }
      })
      .then(responseData => {
        if (responseData.error) {
          console.error(responseData)
        } else {
          // this is our redirect
          this.props.history.push("/listings")
          this.props.handleUpdateCurrentUser(responseData)
        }
      })
    // .catch(err => console.error(err))

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
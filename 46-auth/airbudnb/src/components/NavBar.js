import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  state = {
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleUpdateSearch(this.state.searchTerm)
  }

  render() {
    return (
      <header>
        <Link to="/listings">
          <div className="logo" />
        </Link>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search cities..." value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div className="actions">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </header>
    )
  }
}

export default NavBar
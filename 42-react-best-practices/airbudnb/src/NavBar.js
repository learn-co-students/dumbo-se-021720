import React from 'react'

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
        <div className="logo" />
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search cities..." value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div className="actions">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    )
  }
}

export default NavBar
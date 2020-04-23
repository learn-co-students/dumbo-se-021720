import React from 'react'

class NavBar extends React.Component {
  state = {
    searchTerm: ""
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleUpdateSearch(this.state.searchTerm)
  }

  render() {
    return (
      <header>
        <div className="logo"></div>
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
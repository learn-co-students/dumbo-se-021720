import React from 'react'

class Search extends React.Component {
  state = {
    searchTerm: ""
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.searchTerm)
  }

  render() {

    return (
      <form className="ui search" onSubmit={this.handleSubmit}>
        <div className="ui icon input">
          <input className="prompt" onChange={this.handleChange} value={this.state.searchTerm} />
          <i className="search icon" />
        </div>
      </form>
    )
  }
}

export default Search

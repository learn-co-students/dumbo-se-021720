import React from 'react';

class SearchBar extends React.Component {

  handleType = (event) => {
    this.props.handleUpdateSearch(event.target.value)
  }

  render() {
    return (
      <div className="search">
        <input value={this.props.searchTerm} onChange={this.handleType} type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
        <label htmlFor="age">Sort By Age:</label>
        <input checked={this.props.sortedByAge} onChange={this.props.handleSortedByAge} type="checkbox" id="age" name="age" />
      </div>
    );
  }

}

export default SearchBar;

import React from 'react';

class Planeteer extends React.Component {
  state = {
    showQuote: false
  }

  handleClick = (event) => {
    this.setState(prevState => {
      return {
        showQuote: !prevState.showQuote
      }
    })
  }

  handleDeleteClick = event => {
    this.props.deletePlaneteer(this.props.planeteer.id)
  }

  render() {
    const { name, pictureUrl, fromUSA, born, bio, quote, twitter } = this.props.planeteer

    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - born

    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text" onClick={this.handleClick}>{this.state.showQuote ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            <button onClick={this.handleDeleteClick}>Delete Planeteer</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;

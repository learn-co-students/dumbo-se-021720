import React from 'react';

class Planeteer extends React.Component {
  state = {
    displayBio: false
  }

  onClickHelper = () => {
    // if this.displayBio is true, change to false
    // otherwise this.displayBio is false, change to true
    this.setState(prevState => ({ 
      displayBio: !prevState.displayBio
    }))
  }

  render() {
    // const { searchTerm } = this.props
    const { id, name, bio, twitter, pictureUrl, quote, fromUSA, born} = this.props.planeteer
    
    // if (name.toLowerCase().includes(searchTerm) || bio.toLowerCase().includes(searchTerm)) {
      return (
        <li className="cards__item">
          <div className="card">
            <img onClick={this.onClickHelper} src={pictureUrl} alt={name} className="card__image" />
            <div className="card__content">
              <div className="card__title">{name}</div>
              <p className="card__text">{this.state.displayBio ? bio : quote}</p>
              <div className="card__detail">
                <p>{twitter}</p>
                <p>Age: {new Date().getFullYear() - born}</p>
                <p>{fromUSA ? "USA Based" : "Working Overseas"}</p>
              </div>
              <button onClick={() => this.props.handleDeletePlaneteer(id)}>X</button>
            </div>
          </div>
        </li>
      );
    // } else {
    //   return null
    // }
  }

}

export default Planeteer;

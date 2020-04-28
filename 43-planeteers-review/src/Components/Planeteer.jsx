import React from 'react';

class Planeteer extends React.Component {

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={"RENDER IMAGE"} alt={"RENDER PERSON NAME"} className="card__image" />
          <div className="card__content">
            <div className="card__title">{"RENDER NAME"}</div>
            <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
            <div className="card__detail">
              <p>{"RENDER TWITTER HANDLE"}</p>
              <p>Age: {"RENDER THE AGE OF THE PERSON"}</p>
              <p>{"CONDITIONALLY RENDER WHETHER THE PERSON IS USA-BASED OR WORKING OVERSEAS"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;

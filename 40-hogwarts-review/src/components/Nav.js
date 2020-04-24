import piggy from "../porco.png";
import React from "react";
import Filter from './Filter'

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <Filter
        onlyGreased={props.onlyGreased}
        toggleGreased={props.toggleGreased}
        sortBy={props.sortBy}
        updateSort={props.updateSort}
      />
    </div>
  );
};

export default Nav;

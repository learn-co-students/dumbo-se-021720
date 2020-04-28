import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  render(){
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer />
      </div>
    );
  }

}

export default App;

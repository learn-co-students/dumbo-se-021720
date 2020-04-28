import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let arrayOfComponents = [...props.planeteers]
    .filter(planeteer => planeteer.name.toLowerCase().includes(props.searchTerm) || planeteer.bio.toLowerCase().includes(props.searchTerm))
    .sort((planeteerA, planeteerB) => {
      if (props.sortedByAge) {
        return planeteerA.born - planeteerB.born
      } else {
        return 0
      }
    })
    .map(planeteer => {
      return <Planeteer 
        key={planeteer.id} 
        planeteer={planeteer} 
        handleDeletePlaneteer={props.handleDeletePlaneteer}
      />
    })
  
  return (
    <ul className="cards">
      {
        arrayOfComponents
      }
    </ul>
  )

};

export default PlaneteersContainer;

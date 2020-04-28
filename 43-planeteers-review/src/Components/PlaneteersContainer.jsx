import React from 'react';
import Planeteer from './Planeteer'


const PlaneteersContainer = (props) => {

  let filteredArray = props.planeteers
    .filter(planeteer => planeteer.name.toLowerCase().includes(props.searchTerm) || planeteer.bio.toLowerCase().includes(props.searchTerm))
    
  let sortedArray = filteredArray

  if (props.sortedByAge) {
    sortedArray = filteredArray.sort((planeteerA, planeteerB) => {
      return planeteerA.born - planeteerB.born
    })
  }

  let renderArray = sortedArray.map(planeteer => {
      return <Planeteer 
        key={planeteer.id} 
        planeteer={planeteer} 
        handleDeletePlaneteer={props.handleDeletePlaneteer}
      />
    })
  
  return (
    <ul className="cards">
      {
        renderArray
      }
    </ul>
  )

};

export default PlaneteersContainer;

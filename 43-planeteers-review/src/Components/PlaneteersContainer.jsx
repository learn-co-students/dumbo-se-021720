import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = ({ planeteers, deletePlaneteer }) => {

  const handlePlaneteer = () => {
    return planeteers.map(planeteer => {
      return <Planeteer key={planeteer.id} deletePlaneteer={deletePlaneteer} planeteer={planeteer} />
    })
  }

  return (
    <ul className="cards">
      {
        handlePlaneteer()
      }
    </ul>
  )

};

export default PlaneteersContainer;

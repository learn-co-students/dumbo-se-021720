import React from 'react'

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="images">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        {pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} alt={pokemon.name} />}
      </div>
      <div className="info">
        <h2>{pokemon.name}</h2>
        {pokemon.stats.map(stat =>
          <div key={stat.stat.name}>
            <strong>{stat.stat.name}: </strong>
            <span>{stat.base_stat}</span>
          </div>
        )}
      </div>

    </div>
  )
}

export default Pokemon
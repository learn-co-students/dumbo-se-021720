import React from 'react'
import Pokemon from './Pokemon'

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) =>
        <Pokemon key={index} pokemon={pokemon} />
      )}
    </div>
  )
}

export default PokemonList
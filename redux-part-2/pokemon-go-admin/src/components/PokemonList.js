import React from 'react'
import { useSelector } from 'react-redux'
import Pokemon from './Pokemon'

const PokemonList = () => {
  const pokemons = useSelector(state => state.pokemons)

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) =>
        <Pokemon key={index} pokemon={pokemon} />
      )}
    </div>
  )
}

export default PokemonList
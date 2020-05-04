import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderCards() {
    return this.props.pokemons.map(pokemon => {
      const { id, name, stats, sprites } = pokemon

      const hp = stats.find(stat => stat.name === "hp").value

      return <PokemonCard
        key={id}
        name={name}
        hp={hp}
        sprites={sprites}
      />
    }
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection

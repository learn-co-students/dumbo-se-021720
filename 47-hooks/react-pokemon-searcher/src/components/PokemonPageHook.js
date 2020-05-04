import React, { useState, useEffect } from 'react'
import { Container, Pagination, Header, Dimmer, Loader } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import Search from './Search'
import { usePagedFetch } from '../hooks/usePagedFetch'

const PokemonPage = (props) => {
  console.log("PokemonPage called")

  const [query, setQuery] = useState("")
  const [activePage, setActivePage] = useState(1)

  const pokemonInfo = usePagedFetch(query, activePage)
  const { pokemons, totalPages, loaded } = pokemonInfo

  console.log({ pokemons, totalPages, loaded, query, activePage })


  // just run useEffect once -> second arg of []

  const handleUpdateQuery = query => {
    setQuery(query)
    setActivePage(1)
  }

  const handleUpdatePage = (e, { activePage }) => setActivePage(activePage)

  return (
    <Container>
      <Header as="h1">Pokemon Searcher</Header>
      <Search onSubmit={handleUpdateQuery} />
      <br />
      <Container>
        {loaded
          ? <PokemonCollection pokemons={pokemons} />
          : <Dimmer active><Loader /></Dimmer>
        }
      </Container>
      <br />
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handleUpdatePage}
      />
    </Container>
  )
}

export default PokemonPage

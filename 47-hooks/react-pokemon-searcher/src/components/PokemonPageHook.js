import React, { useState, useEffect } from 'react'
import { Container, Pagination, Header, Dimmer, Loader } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import Search from './Search'
import { usePagedFetch } from '../hooks/usePagedFetch'

const PokemonPage = (props) => {
  console.log("PokemonPage called")

  const [query, setQuery] = useState("")
  const [activePage, setActivePage] = useState(1)

  // for custom hook
  // const pokemonInfo = usePagedFetch(query, activePage)
  // const { pokemons, totalPages, loaded } = pokemonInfo


  const [pokemons, setPokemons] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const limit = 18
    const url = `http://localhost:3000/pokemon?_page=${activePage}&_limit=${limit}&q=${query}`

    setLoaded(false)
    fetch(url)
      .then(response => {
        // // get the total count from the headers to calculate the total pages
        const totalPages = Math.ceil(parseInt(response.headers.get("X-Total-Count")) / limit)

        response.json()
          // next .then is nested so we can still access the totalPages in scope
          .then(pokemons => {
            setPokemons(pokemons)
            setTotalPages(totalPages)
            setLoaded(true)
          })
      })

    return () => {
      console.log("unmount")
      // clearInterval()
    }
  }, [query, activePage])

  // just run useEffect once -> second arg of []
  // run useEffect whenever any dependency changes -> second arg of [dependency1, dependency2...]

  const handleUpdateQuery = query => {
    setQuery(query)
    setActivePage(1)
  }

  const handleUpdatePage = (e, { activePage }) => setActivePage(activePage)

  console.log({ pokemons, totalPages, loaded, query, activePage })
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

import React from 'react'
import PokemonCollection from './PokemonCollection'
import Search from './Search'
import { Container, Pagination, Header, Dimmer, Loader } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    totalPages: 0,
    loaded: false,
    query: "",
    activePage: 1
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.fetchPokemon()
    }
    if (this.state.activePage !== prevState.activePage) {
      this.fetchPokemon()
    }
  }

  fetchPokemon() {
    this.setState({ loaded: false })

    const limit = 18
    const url = `http://localhost:3000/pokemon?_page=${this.state.activePage}&_limit=${limit}&q=${this.state.query}`

    fetch(url)
      .then(response => {
        // get the total count from the headers to calculate the total pages
        const totalPages = Math.ceil(parseInt(response.headers.get("X-Total-Count")) / limit)

        response.json()
          // next .then is nested so we can still access the totalPages in scope
          .then(pokemons => {
            this.setState({ pokemons, totalPages, loaded: true })
          })
      })
  }

  handleUpdateQuery = query => this.setState({ query, activePage: 1 })

  handleUpdatePage = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { pokemons, loaded, totalPages, activePage } = this.state

    return (
      <Container>
        <Header as="h1">Pokemon Searcher</Header>
        <Search onSubmit={this.handleUpdateQuery} />
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
          onPageChange={this.handleUpdatePage}
        />
      </Container>
    )
  }
}

export default PokemonPage

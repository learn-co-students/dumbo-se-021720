import { useState, useEffect } from 'react'

const cache = {}

export const usePagedFetch = (query, activePage) => {
  console.log("in usePagedFetch")

  const [pokemonInfo, setPokemonInfo] = useState({
    pokemons: [],
    totalPages: 0,
    loaded: false
  })

  useEffect(() => {
    const limit = 18
    const url = `http://localhost:3000/pokemon?_page=${activePage}&_limit=${limit}&q=${query}`

    const key = `${activePage}:${query}`
    if (cache[key]) {
      setPokemonInfo({ pokemons: cache[key].pokemons, totalPages: cache[key].totalPages, loaded: true })
    } else {
      setPokemonInfo(p => {
        return {
          ...p,
          loaded: false
        }
      })
      fetch(url)
        .then(response => {
          // // get the total count from the headers to calculate the total pages
          const totalPages = Math.ceil(parseInt(response.headers.get("X-Total-Count")) / limit)

          response.json()
            // next .then is nested so we can still access the totalPages in scope
            .then(pokemons => {
              setPokemonInfo({ pokemons, totalPages, loaded: true })
              cache[key] = { pokemons, totalPages }
            })
        })
    }

    return () => {
      console.log("unmount")
      // clearInterval()
    }
  }, [query, activePage]) // deps array

  return pokemonInfo
}
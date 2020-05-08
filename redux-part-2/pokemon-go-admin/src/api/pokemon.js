export const getRandomPokemon = () => {
  const id = Math.floor(Math.random() * 807) + 1
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => {
      if (!r.ok) throw r
      return r.json()
    })
    .then(pokemon => {
      return {
        name: pokemon.name,
        sprites: pokemon.sprites,
        stats: pokemon.stats
      }
    })
}
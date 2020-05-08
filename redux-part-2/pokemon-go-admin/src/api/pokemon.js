export const getRandomPokemon = () => {
  const id = Math.floor(Math.random() * 964) + 1
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json())
    .then(pokemon => {
      return {
        name: pokemon.name,
        sprites: pokemon.sprites,
        stats: pokemon.stats
      }
    })
    .catch(err => console.error("Pokemon fetch error", err))
}
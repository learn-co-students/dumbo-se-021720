// function sleep(time) {
//   const start = new Date()
//   while (new Date() - start < time) { }
// }

console.log("Getting you a pokemon...")

// const thePromise = fetch("https://pokeapi.co/api/v2/pokemon/1/")
// console.log(thePromise)
// thePromise.then(response => {
//   console.log(response)
//   const promiseData = response.json()

//   promiseData.then(data => {
//     console.log(data)
//   })
// })
let pokemon = null

fetch("https://pokeapi.co/api/v2/pokemon/1/")
  .then(response => response.json())
  .then(pokemonData => {
    pokemon = pokemonData
    renderPokemon()
  })

function renderPokemon() {
  pokemon
}

console.log("POKEMON", pokemon)
console.log("AFTER fetch")
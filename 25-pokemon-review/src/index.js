document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  const pokemonContainerDiv = document.querySelector("#pokemon-container")

  // 1.  Show all the pokemon cards
  // use the pokemon array, loop through it to get each object
  POKEMON.forEach(pokemon => {
    renderPokemon(pokemon)
  })

  function renderPokemon(pokemon) {
    // turn each object into some DOM elements (a pokemon card)
    // 1. make the outermost element with doc.createElement
    const pokeCardDiv = document.createElement("div")
    // 2. set its attributes
    pokeCardDiv.className = "pokemon-card"
    // 3. set some innerHTML for the rest of the elements
    pokeCardDiv.innerHTML = `
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
      </div>
    `
    // 4. append to the parent
    pokemonContainerDiv.append(pokeCardDiv)
  }


  // 1.  Implement a flip functionality on each Pokemon.
  // figure out when a pokemon image is clicked (some event listener on the image)
  // need to toggle between the front and back sprites for the pokemon object
  // EVENT DELEGATION
  // 1. find a stable parent
  pokemonContainerDiv.addEventListener("click", e => {
    // 2. use some condition to check the elemt 
    if (e.target.className === "toggle-sprite") {
      const pokeId = parseInt(e.target.dataset.id)
      // need access to the pokemon obj
      const foundPoke = POKEMON.find(poke => poke.id === pokeId)
      console.log(foundPoke)
      // update the sprite (flip from front to back etc)
      if (e.target.src === foundPoke.sprites.front) {
        e.target.src = foundPoke.sprites.back
      } else {
        e.target.src = foundPoke.sprites.front
      }
    }
  })




  // 1.  Implement a filter functionality for your Pokemon list.
  // 1.  Your search should include pokemon whose names are **not** exact matches
  // figure out when a user types something in the input field

  // 1. the element we care about for events
  // 2. the type of event
  // 3. the callback fn
  const pokemonSearchInput = document.querySelector("#pokemon-search-input")
  pokemonSearchInput.addEventListener("input", e => {
    // find the pokemon whose names match that input (partial match)
    const userInput = e.target.value

    // only render those pokemon on the page
    const filteredPokes = POKEMON.filter(pokemon => pokemon.name.includes(userInput))

    pokemonContainerDiv.innerHTML = "" // clear out our old cards

    // redraw the shorter list
    filteredPokes.forEach(pokemon => {
      renderPokemon(pokemon)
    })

    // document.querySelectorAll(".pokemon-card").forEach(card => {
    //   const h1 = card.querySelector(".center-text")

    //   if (h1.textContent.includes(userInput)) {
    //     card.style.display = "block"
    //   } else {
    //     card.style.display = "none"
    //   }
    // })
  })





  // When X event happens (when the page loads)
  // Do Y fetch request
  // Slap Z on/off the DOM (add a pokemon card to the pokemon container)





})
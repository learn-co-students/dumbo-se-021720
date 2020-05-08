import React, { useEffect } from 'react';
import PokemonMap from './components/PokemonMap';

import { getWeather } from './api/weather'
import Header from './components/Header';
import PokemonList from './components/PokemonList';

function App() {
  const weather = { temperature: 55, temperatureUnit: "F", shortForecast: "Rain", icon: "☀️" }
  const position = [40.7008739, -73.9875141]
  const pokemons = [{ "name": "quagsire", "sprites": { "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/195.png", "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/195.png", "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/195.png", "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/195.png", "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png", "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/195.png", "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/195.png", "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/195.png" }, "stats": [{ "base_stat": 35, "effort": 0, "stat": { "name": "speed", "url": "https://pokeapi.co/api/v2/stat/6/" } }, { "base_stat": 65, "effort": 0, "stat": { "name": "special-defense", "url": "https://pokeapi.co/api/v2/stat/5/" } }, { "base_stat": 65, "effort": 0, "stat": { "name": "special-attack", "url": "https://pokeapi.co/api/v2/stat/4/" } }, { "base_stat": 85, "effort": 0, "stat": { "name": "defense", "url": "https://pokeapi.co/api/v2/stat/3/" } }, { "base_stat": 85, "effort": 0, "stat": { "name": "attack", "url": "https://pokeapi.co/api/v2/stat/2/" } }, { "base_stat": 95, "effort": 2, "stat": { "name": "hp", "url": "https://pokeapi.co/api/v2/stat/1/" } }], "position": [40.699641625343126, -73.98946603152181] }, { "name": "aurorus", "sprites": { "back_default": null, "back_female": null, "back_shiny": null, "back_shiny_female": null, "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png", "front_female": null, "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/699.png", "front_shiny_female": null }, "stats": [{ "base_stat": 58, "effort": 0, "stat": { "name": "speed", "url": "https://pokeapi.co/api/v2/stat/6/" } }, { "base_stat": 92, "effort": 0, "stat": { "name": "special-defense", "url": "https://pokeapi.co/api/v2/stat/5/" } }, { "base_stat": 99, "effort": 0, "stat": { "name": "special-attack", "url": "https://pokeapi.co/api/v2/stat/4/" } }, { "base_stat": 72, "effort": 0, "stat": { "name": "defense", "url": "https://pokeapi.co/api/v2/stat/3/" } }, { "base_stat": 77, "effort": 0, "stat": { "name": "attack", "url": "https://pokeapi.co/api/v2/stat/2/" } }, { "base_stat": 123, "effort": 2, "stat": { "name": "hp", "url": "https://pokeapi.co/api/v2/stat/1/" } }], "position": [40.701235859047294, -73.98229625164312] }, { "name": "kingler", "sprites": { "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png", "back_female": null, "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/99.png", "back_shiny_female": null, "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png", "front_female": null, "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/99.png", "front_shiny_female": null }, "stats": [{ "base_stat": 75, "effort": 0, "stat": { "name": "speed", "url": "https://pokeapi.co/api/v2/stat/6/" } }, { "base_stat": 50, "effort": 0, "stat": { "name": "special-defense", "url": "https://pokeapi.co/api/v2/stat/5/" } }, { "base_stat": 50, "effort": 0, "stat": { "name": "special-attack", "url": "https://pokeapi.co/api/v2/stat/4/" } }, { "base_stat": 115, "effort": 0, "stat": { "name": "defense", "url": "https://pokeapi.co/api/v2/stat/3/" } }, { "base_stat": 130, "effort": 2, "stat": { "name": "attack", "url": "https://pokeapi.co/api/v2/stat/2/" } }, { "base_stat": 55, "effort": 0, "stat": { "name": "hp", "url": "https://pokeapi.co/api/v2/stat/1/" } }], "position": [40.69547691646669, -73.9829402438478] }]

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log([coords.latitude, coords.longitude])
    }, err => console.error("geolocation error", err))
  }, [])

  // get the weather for that location
  useEffect(() => {
    if (position.length) {
      getWeather(position[0], position[1])
        .then(weather => {
          console.log(weather)
        })
    }
  }, [position])

  // loading screen
  if (!position.length || !weather) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={`App ${weather.icon}`}>
      <Header weather={weather} />
      <main>
        <PokemonList pokemons={pokemons} />
        <PokemonMap position={position} pokemons={pokemons} icon={weather.icon} />
      </main>
    </div>
  );
}

export default App;

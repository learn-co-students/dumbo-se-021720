import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { getRandomPokemon } from '../api/pokemon'
import PokemonMarker from './PokemonMarker'

const maps = {
  "☀️": {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "❄️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "🌧": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "☁️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
}

const PokemonMap = ({ position, pokemons, icon = "☀️" }) => {

  const map = maps[icon] ? maps[icon] : maps["☀️"]

  const handleMapClick = ({ latlng: { lat, lng } }) => {
    getRandomPokemon()
      .then(pokemon => {
        const pokemonWithPosition = { ...pokemon, position: [lat, lng] }
        console.log(pokemonWithPosition)
      })
  }

  return (
    <Map center={position} zoom={15} onClick={handleMapClick} style={{ height: "84vh" }}>
      <TileLayer
        url={map.url}
        attribution={map.attribution}
      />
      {pokemons.map((pokemon, index) => <PokemonMarker key={index} pokemon={pokemon} />)}
    </Map>
  )
}

export default PokemonMap

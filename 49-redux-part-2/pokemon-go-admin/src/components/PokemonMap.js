import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet'
import PokemonMarker from './PokemonMarker'
import { fetchPokemon } from '../store/actions'

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

const PokemonMap = () => {

  const { position, pokemons, icon } = useSelector(state => {
    return {
      position: state.user.position,
      pokemons: state.pokemon.pokemons,
      icon: state.user.weather.icon
    }
  })

  const dispatch = useDispatch()

  const map = maps[icon] ? maps[icon] : maps["☀️"]

  const handleMapClick = ({ latlng: { lat, lng } }) => {
    dispatch(fetchPokemon(lat, lng))
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

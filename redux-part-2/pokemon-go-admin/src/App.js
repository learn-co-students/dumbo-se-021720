import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import PokemonMap from './components/PokemonMap';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

import { setPosition, fetchWeather } from './store/actions'

function App() {

  const weather = useSelector(state => state.weather)
  const position = useSelector(state => state.position)


  // useDispatch returns a dispatch function 
  const dispatch = useDispatch()


  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      dispatch(setPosition([coords.latitude, coords.longitude]))
    }, err => console.error("geolocation error", err))
  }, [dispatch])


  // get the weather for that location
  useEffect(() => {
    if (position.length) {
      dispatch(fetchWeather(position))
    }
  }, [position, dispatch])


  // loading screen
  if (!position.length || !weather) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={`App ${weather.icon}`}>
      <Header />
      <main>
        <PokemonList />
        <PokemonMap />
      </main>
    </div>
  );
}

export default App;

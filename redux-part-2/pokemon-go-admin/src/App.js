import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import PokemonMap from './components/PokemonMap';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

import { setPosition, fetchWeather } from './store/actions'

function App() {

  const weather = useSelector(state => state.user.weather)
  const position = useSelector(state => state.user.position)


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

  // const getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(({ coords }) => {
  //     dispatch(setPosition([coords.latitude, coords.longitude]))
  //   }, err => console.error("geolocation error", err))
  // }
  // if (!position.length) {
  //   return <button className="finder" onClick={getLocation}>Find Me</button>
  // }

  // loading screen
  if (!weather || !position.length) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={`App ${weather && weather.icon}`}>
      <Header />
      <main>
        <PokemonList />
        <PokemonMap />
      </main>
    </div>
  );
}

export default App;

import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../store/actions'

const Header = ({ weather, position, fetchWeather }) => {

  return (
    <div className="menu">
      <h1>PokeMapper</h1>
      {weather && (
        <div className="weather" onClick={() => fetchWeather(position)}>
          <h4>{weather.temperature}°F</h4>
          <span role="img" aria-label={weather.shortForecast}>{weather.icon}</span>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {

  return {
    weather: state.weather,
    position: state.position
  }
}

// mapDispatchToProps can be a function that will take dispatch as an argument:
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchWeather: (position) => dispatch(fetchWeather(position))
//   }
// }

// mapDispatchToProps can also be an OBJECT that includes uses action creators directly:
const mapDispatchToProps = {
  fetchWeather: fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
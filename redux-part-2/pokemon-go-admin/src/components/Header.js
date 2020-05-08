import React from 'react'

const Header = ({ weather }) => {
  return (
    <div className="menu">
      <h1>PokeMapper</h1>
      {weather && (
        <div className="weather">
          <h4>{weather.temperature}°F</h4>
          <span role="img" aria-label={weather.shortForecast}>{weather.icon}</span>
        </div>
      )}
    </div>
  )
}

export default Header
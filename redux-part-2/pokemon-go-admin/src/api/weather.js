export const getWeather = (lat, lng) => {
  return fetch(`https://api.weather.gov/points/${lat},${lng}`)
    .then(r => r.json())
    .then(data => fetch(data.properties.forecast))
    .then(r => r.json())
    .then(data => {
      return formatForecast(data.properties.periods[0])
    })
    .catch(err => {
      console.error("Weather fetch failed, using fallback data")
      return { temperature: 55, temperatureUnit: "F", shortForecast: "Sunny", icon: "☀️" }
    })
}

// if you're curious about async/await syntax...
export const asyncGetWeather = async (lat, lng) => {
  try {
    const pointsResponse = await fetch(`https://api.weather.gov/points/${lat},${lng}`)
    const pointsData = await pointsResponse.json()

    const forecastResponse = await fetch(pointsData.properties.forecast)
    const forecastData = await forecastResponse.json()

    return formatForecast(forecastData.properties.periods[0])
  } catch (err) {
    console.error("Weather fetch failed, using fallback data")
    return { temperature: 55, temperatureUnit: "F", shortForecast: "Sunny", icon: "☀️" }
  }
}

const formatForecast = ({ shortForecast, temperature, temperatureUnit }) => {
  let lcase = shortForecast.toLowerCase()

  let icon = ""
  if (lcase.includes("sun")) {
    icon = "☀️"
  } else if (
    lcase.includes("rain") || lcase.includes("storm") || lcase.includes("shower")
  ) {
    icon = "🌧"
  } else if (lcase.includes("cloud")) {
    icon = "☁️"
  } else if (lcase.includes("snow")) {
    icon = "❄️"
  }

  return {
    temperature,
    temperatureUnit,
    shortForecast,
    icon
  }
}
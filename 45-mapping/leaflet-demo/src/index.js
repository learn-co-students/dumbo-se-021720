import React from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const accessToken = process.env.REACT_APP_MAPBOX_API_KEY

const MyMap = () => {
  const position = [40.7008739, -73.9897028]
  return (
    <Map
      center={position}
      zoom={13}
      style={{ width: '500px', height: '500px' }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id="mapbox/streets-v11"
        tileSize={512}
        zoomOffset={-1}
        accessToken={accessToken}
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}

ReactDOM.render(
  <MyMap />,
  document.getElementById('root')
)
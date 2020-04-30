import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import ListingCard from './ListingCard'

// const position = [51.505, -0.09]

const ListingMap = ({ listings }) => {
  const firstListing = listings[0]
  return (
    <div className="map">
      <Map center={[firstListing.latitude, firstListing.longitude]} zoom={13} style={{ height: "900px" }}>
        <TileLayer
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {listings.map(listing => (
          <Marker key={listing.id} position={[listing.latitude, listing.longitude]}>
            <Popup>
              <ListingCard listing={listing} />
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default ListingMap
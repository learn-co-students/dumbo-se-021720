import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import ListingCard from './ListingCard'

const ListingMap = ({ listings, showDetail }) => {
  const firstListing = listings[0]
  return (
    <div className="map">
      <Map center={[firstListing.latitude, firstListing.longitude]} zoom={13} style={{ height: "900px" }}>
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`}
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
        />
        {listings.map(listing => (
          <Marker key={listing.id} position={[listing.latitude, listing.longitude]}>
            <Popup>
              <ListingCard listing={listing} showDetail={showDetail} />
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default ListingMap
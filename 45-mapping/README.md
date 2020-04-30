# Mapping with Leaflet

Leaflet is a popular open-source library for working with maps. The other big player is of course Google Maps, but since that requires an API key (and isn't free forever), we're going to show what you can do with Leaflet!

First, install **both** Leaflet **and** React Leaflet:

```sh
$ npm install leaflet react-leaflet
```

Then, in your `public/index.html` file, add Leaflet's stylesheet in the head:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
```

React Leaflet lets you work with the Leaflet library through React components. 

Here's a working example:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const MyMap = () => {
  const position = [40.7008739, -73.9897028]
  return (
    <Map
      center={position}
      zoom={13}
      style={{ width: '500px', height: '500px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
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
```

A few things to note:

- `<Map>` must be the parent component for any other React Leaflet components you want to use (such as TileLayer, Marker, and Popup)
- `<Map>` always needs a height!
- `<TileLayer>` takes a url prop that will let you choose the map data source - see a bunch of options [here](https://leaflet-extras.github.io/leaflet-providers/preview/)
- The `center` prop of `<Map>` and the `position` prop of `<Marker>` both take an array of coordinates: `[latitude, longitude]`
- `<Marker>` can be customized if you want to bring in your own icon images:

```js
// import the icon function from leaflet
import { icon } from 'leaflet'

// import your icon images
import iconImg from './icon.png'
import shadowImg from './icon-shadow.png'

// create an icon
const myIcon = icon({ 
  iconUrl: iconImg,
  shadowUrl: shadowImg,

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

// in component render:
<Marker position={position} icon={myIcon}>
  <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
</Marker>

```

## Bonus: Mapbox and working with API Keys

One popular provider for Leaflet map data is [Mapbox](https://www.mapbox.com/). However, using their maps requires working with an API key. Here we'll learn about how to use an API key for a client-side app (and keep it safe from malicious users).

First, we're going to sign up for *two* API keys on Mapbox - one for our development version of the app, and one that we'll deploy to production.

Make an account on Mapbox, then head over to the [accounts page](https://account.mapbox.com/) and create two tokens (keep the Public scopes enabled). Leave the URL section blank for now for both tokens. **When you deploy your app to production, come back and add your site's url here to keep your token secure!** (Aside: `create-react-app` is designed to build static client side applications, which means that in the final build of our code, our API key will be exposed in the bundled Javascript file. So to keep our keys safe, restrict access to your production token in your Mapbox account settings when you deploy your app!)

Next, create two files in the root directory of your app: `.env.development.local` and `.env.production.local`. We'll use these to store our API keys in [environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) and ensure they aren't accidentally pushed to Github. Check your `.gitignore` file to ensure these `.env` files aren't tracked by git. 

In each file, add the following line (with your production key in `.env.production.local` and your development key in `.env.development.local`):

```
REACT_APP_MAPBOX_API_KEY=yourmapboxkeygoeshere
```

Now we can use Mapbox in our TileLayer:

```js
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
```

Check out all the Static Tile options from Mapbox [here](https://docs.mapbox.com/api/maps/#static-tiles)!

## Resources
[Leaflet](https://leafletjs.com/)
[React Leaflet](https://react-leaflet.js.org/)
[Free Leaflet Proviers](https://leaflet-extras.github.io/leaflet-providers/preview/)
[Mapbox API](https://docs.mapbox.com/api/maps/#static-tiles)
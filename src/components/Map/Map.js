import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'

const Map = withScriptjs(withGoogleMap(() => {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: 52.146973,
          lng: -106.647034
        }}
      >
        <Marker position={{
          lat: 52.146973,
          lng: -106.647034
        }} />
      </GoogleMap>
    </div>
  )
}))

export default Map

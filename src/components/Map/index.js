import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <div className="map-wrap">
      <MapContainer
        center={[19.033497590347892, 73.02314746657879]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[19.033497590347892, 73.02314746657879]}>
          <Popup>
            <div className="info-map">
              Tabassum Khan,
              <br />
              Nerul East - 400706,
              <br />
              Mumbai, Maharashtra, India
              <br />
              <span>tabassum.kamal.k@gmail.com</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map

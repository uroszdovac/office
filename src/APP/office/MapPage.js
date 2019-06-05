import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapPage = (props) => {
  
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={1.5}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {props.officesData.map((office, i)=>{
            return <Marker key={i} position={[office.latitude, office.longitude]}>
                        <Popup>
                            {(office.photo) ? <img src={office.photo} alt=""/> : <p className='logoPic'>{office.name.charAt(0).toUpperCase()} </p>}
                            <h4>{office.name} </h4>
                            <p>{office.description}</p>
                        </Popup>
                    </Marker>
        })}
        
      </LeafletMap>
    );
  }


export default MapPage;
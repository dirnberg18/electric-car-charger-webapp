import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import json from './data/charging-locations.json';
import ListLocations from './listLocations.js';
 
const containerStyle = {
  width: '100%',
  height: '500px',
  display: 'block'
};
 
const center = {
  lat: 65.05815,
  lng: 25.45411
};
 
function VisitorView() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [SelectedCenter, setSelectedCenter] = React.useState(null)
 
  return (
    <div>
    <LoadScript>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {json.features.map((location) => (
            <Marker 
                key={location.properties.PARK_ID} 
                position={{
                    lat: location.geometry.coordinates[1],
                    lng: location.geometry.coordinates[0]
                }}

                onClick={() => {
                    setSelectedCenter(location);
                }}
                /> 
                ))}
<></>
                {SelectedCenter && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelectedCenter(null);
                        }}
                        position={{
                            lat: SelectedCenter.geometry.coordinates[1],
                            lng: SelectedCenter.geometry.coordinates[0]
                        }}
                    >
                        <div>
                            <h2>{SelectedCenter.properties.NAME}</h2>
                            <p>{SelectedCenter.properties.ADDRESS}</p>
                            <p>{SelectedCenter.properties.DESCRIPTIO}</p>
                            <h4>CODE: {SelectedCenter.properties.ADDRESS_FR}</h4>

                        </div>
                    </InfoWindow>
                     )}
      </GoogleMap>
    </LoadScript>
    <ListLocations />
    </div>

  )
}
 
export default React.memo(VisitorView)




/*import React from 'react';
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker
} from "react-google-maps";
import * as locationsData from "./charging-locations.json";

function Map() {
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 65.05815, lng: 25.45411}}
        >
        {locationsData.features.map((location) => (
            <Marker 
                key={location.properties.PARK_ID} 
                position={{
                    lat: location.geometry.coordinates[1],
                    lng: location.geometry.coordinates[0]
                }}
            />
        ))}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function VisitorView() {
    return (
    <div>
        <div>
            <h1>Hallo Marlene</h1>
        </div>
        <div>
        <WrappedMap 
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement = {<div style= {{height: `100%`}}/>}
        containerElement = {<div style= {{height: `400%`}}/>}
        mapElement = {<div style= {{height: `100%`}}/>}
        />
        </div>
    </div>
    )
  }*/
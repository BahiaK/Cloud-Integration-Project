import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationPin } from "./LocationPin";
import "./map.css";

export const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map">

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

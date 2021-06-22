import React from 'react';
import pinnormal from '../Images/pinnormal.png';
import './LocationMarker.css';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <img src={pinnormal} alt="" className="location_icon" />
    </div>
  );
};

export default LocationMarker;

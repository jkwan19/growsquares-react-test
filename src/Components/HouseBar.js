import React from 'react';
import './HouseBar.css';
import HouseButton from './HouseButton';

const HouseBar = () => {
  return (
    <div className="btn-bar">
      <div className="btn-container">
        <HouseButton type="House"/>
        <HouseButton type="Apartment"/>
        <HouseButton type="Town House"/>
      </div>
    </div>
  )
}

export default HouseBar;
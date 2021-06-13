import React from 'react';
import './HouseBar.css';
import HouseButton from './HouseButton';

const HouseBar = () => {
  return (
    <div className="btn-bar">
      <HouseButton type="House"/>
      <HouseButton type="Apartment"/>
      <HouseButton type="Town House"/>
    </div>
  )
}

export default HouseBar;
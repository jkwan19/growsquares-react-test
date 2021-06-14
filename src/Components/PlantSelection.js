import React from 'react';
import './PlantSelection.css';
import PlantButton from './PlantButton';

const PlantSelection = () => {
  return (
    <div className="plants-container">
      <h5>Plant Selection</h5>
      <div className="plants">
        <PlantButton plant='Basil'/>
        <PlantButton plant='Beets'/>
        <PlantButton plant='Scallion'/>
      </div>
    </div>
  )
};

export default PlantSelection;
import React from 'react';
import './PlantSelection.css';
import PlantButton from './PlantButton';

const options = ['Basil', 'Beets', 'Scallion'];

const PlantSelection = () => {
  return (
    <div className="plants-container">
      <h5>Plant Selection</h5>
      <div className="plants">
        {options.map((item, index) => {
          <PlantButton
            plant={item}
            index={index}
            />
        })}
      </div>
    </div>
  )
};

export default PlantSelection;
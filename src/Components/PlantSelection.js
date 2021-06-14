import React, { useState, useContext } from 'react';
import './PlantSelection.css';
import { Context } from '../Context/context';

import PlantButton from './PlantButton';

const plants = ['Basil', 'Beets', 'Scallion'];

const PlantSelection = () => {

  const { plantActiveIndex, setPlantActiveIndex } = useContext(Context);

  const handlePlants = (event) => {
    setPlantActiveIndex(parseInt(event.target.getAttribute("index")));
  };

  return (
    <div className="plants-container">
      <h5>Plant Selection</h5>
      <div className="plants">
        {plants.map((plant, index) => {
          return (
            <PlantButton
              key={plant}
              plant={plant}
              index={index}
              activeIndex={plantActiveIndex}
              handlePlants={handlePlants}
            />
          )
        })}
      </div>
    </div>
  )
};

export default PlantSelection;
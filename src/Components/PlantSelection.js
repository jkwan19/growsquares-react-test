import React, { useState, useContext } from 'react';
import './PlantSelection.css';
import { Context } from '../Context/context';

import PlantButton from './PlantButton';

const PlantSelection = () => {

  const { plantActiveIndex, setPlantActiveIndex, plants } = useContext(Context);

  const handlePlants = (event) => {
    setPlantActiveIndex(parseInt(event.target.getAttribute("index")));
  };

  return (
    <div className="plants-container">
      <div className="plants-header">PLANT SELECTION</div>
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
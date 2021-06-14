import React, { useState } from 'react';
import './PlantSelection.css';
import PlantButton from './PlantButton';

const plants = ['Basil', 'Beets', 'Scallion'];

const PlantSelection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlants = (event) => {
    console.log(event.target, 'plant')
    setActiveIndex(parseInt(event.target.getAttribute("index")));
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
              activeIndex={activeIndex}
              handlePlants={handlePlants}
            />
          )
        })}
      </div>
    </div>
  )
};

export default PlantSelection;
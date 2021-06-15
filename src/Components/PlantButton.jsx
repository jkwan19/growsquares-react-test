import React from 'react';
import './PlantButton.css';

const PlantButton = ({
  plant,
  index,
  activeIndex,
  handlePlants,
}) => (
  <div
    className={`plant-btn${index === activeIndex ? ' active' : ''}`}
    onClick={handlePlants}
  >
    <img
      className={`plant-img${index === activeIndex ? ' active' : ''}`}
      index={index}
      src={`${process.env.PUBLIC_URL}/assets/plant_images/${plant}.png`}
      alt={plant}
    />
  </div>
);

export default PlantButton;

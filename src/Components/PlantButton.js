import React from 'react';
import './PlantButton.css';

const PlantButton = ({
  plant
}) => {
  return (
    <div className='plant-btn'>
      <img src={process.env.PUBLIC_URL + `/assets/plant_images/${plant}.png`} />
    </div>
  )
};

export default PlantButton;
import React from 'react';

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
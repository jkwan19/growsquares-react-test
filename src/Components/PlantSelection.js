import React from 'react';
import PlantButton from './PlantButton';

const PlantSelection = () => {
  return (
    <div>
      <h5>Plant Selection</h5>
      <PlantButton plant='Basil'/>
      <PlantButton plant='Beet'/>
      <PlantButton plant='Scallion'/>
    </div>
  )
};

export default PlantSelection;
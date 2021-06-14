import React from 'react';
import './HouseButton.css';

const HouseButton = ({
  type
}) => {
  return (
    <div className='btn-primary'>
      {type}
    </div>
  )
}

export default HouseButton;
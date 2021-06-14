import React from 'react';
import './HouseButton.css';

const HouseButton = ({
  type,
  index,
  activeIndex,
  handleHouse
}) => {

  return (
    <div
      className={'btn-primary' + `${index === activeIndex ? ' active' : ''}`}
      index={index}
      onClick={handleHouse}
      >
      {type}
    </div>
  )
}

export default HouseButton;
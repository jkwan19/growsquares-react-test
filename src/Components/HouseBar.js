import React, { useState } from 'react';
import './HouseBar.css';
import HouseButton from './HouseButton';

const options = ["House", "Apartment", "Town House"];

const HouseBar = () => {
  const [ activeIndex, setActiveIndex ] = useState(0);

  const handleHouse = (event) => {
    setActiveIndex(parseInt(event.target.getAttribute("index")));
  };

  return (
    <div className="btn-bar">
      <div className="btn-container">
        {options.map((item, index) => {
          return (
            <HouseButton
              key={item}
              type={item}
              value={item}
              index={index}
              activeIndex={activeIndex}
              handleHouse={handleHouse}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HouseBar;
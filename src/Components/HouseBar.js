import React, { useState, useContext } from 'react';
import './HouseBar.css';
import { Context } from '../Context/context';

import HouseButton from './HouseButton';

const options = ["House", "Apartment", "Town House"];

const HouseBar = () => {
  const { houseActiveIndex, setHouseActiveIndex } = useContext(Context);

  const handleHouse = (event) => {
    setHouseActiveIndex(parseInt(event.target.getAttribute("index")));
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
              activeIndex={houseActiveIndex}
              handleHouse={handleHouse}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HouseBar;
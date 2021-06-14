import React, { useContext } from 'react';
import './HouseBar.css';
import { Context } from '../Context/context';

import HouseButton from './HouseButton';

const HouseBar = () => {
  const { houseActiveIndex, setHouseActiveIndex, houses } = useContext(Context);

  const handleHouse = (event) => {
    setHouseActiveIndex(parseInt(event.target.getAttribute("index")));
  };

  return (
    <div className="btn-bar">
      <div className="btn-container">
        {houses.map((house, index) => {
          return (
            <HouseButton
              key={house}
              type={house}
              value={house}
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
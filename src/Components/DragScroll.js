import React, {
  useState,
} from 'react';
import './DragScroll.css';

const calcProgress = (min, max) => {
  return (max - min) * 100;
}
const DragScroll = () => {

  const [value, setValue] = useState(1);

  const handleScroll = (min, max) => {
    setValue(calcProgress(min, max));
  };

  return (
    <div>
      <div className="forecast">GROWTH FORECAST</div>
      <div className="date">Jan 1</div>
      <div className="slider">
        <input
          type="range"
          min={1}
          max={365}
          value={value}
          />
        <label htmlFor="jan" className="drag-left">Jan</label>
        <label htmlFor="dec" className="drag-right">Dec</label>
      </div>
    </div>
    )
};

export default DragScroll;
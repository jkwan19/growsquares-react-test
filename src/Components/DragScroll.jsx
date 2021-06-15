import React, {
  useContext,
} from 'react';
import './DragScroll.css';
import { Context } from '../Context/context';

const DragScroll = () => {
  const { value, setValue, date } = useContext(Context);

  const handleScroll = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="forecast">GROWTH FORECAST</div>
      <div className="date">{date}</div>
      <div className="slider">
        <input
          type="range"
          min={1}
          max={365}
          value={value}
          step={1}
          onChange={handleScroll}
        />
        <label htmlFor="jan" className="drag-left">Jan</label>
        <label htmlFor="dec" className="drag-right">Dec</label>
      </div>
    </div>
  );
};

export default DragScroll;

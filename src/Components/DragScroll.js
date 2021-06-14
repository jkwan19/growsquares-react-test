import React from 'react';
import './DragScroll.css';

const DragScroll = () => {
  return (
    <div>
      <h5>Growth Forecast</h5>
      <div className="slider">
        <input type="range" min="1" max="365"/>
        <label htmlFor="jan" className="drag-left">Jan</label>
        <label htmlFor="dec" className="drag-right">Dec</label>
      </div>
    </div>
    )
};

export default DragScroll;
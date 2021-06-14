import React, {
  useState,
  useEffect,
} from 'react';
import './DragScroll.css';


const dateFromDay = (year, day) => {
  const currentYear = new Date(year, 0);
  const currentDate = new Date(currentYear.setDate(day));
  const options = {
    month: 'long'
  }
  const month = new Intl.DateTimeFormat('en-US', options).format(currentDate)
  const date = currentDate.getDate();
  return `${month.substring(0, 3)} ${date}` ;
}
const DragScroll = () => {

  const [value, setValue] = useState(1);
  const [date, setDate] = useState(dateFromDay(2021, 1))

  useEffect(() => {
    setDate(dateFromDay(2021, value))
  }, [value])

  const handleScroll = (event) => {
    setValue(event.target.value)
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
    )
};

export default DragScroll;
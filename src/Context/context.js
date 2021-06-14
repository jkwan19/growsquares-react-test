import React, {
  useEffect,
  useState,
  createContext
} from 'react';

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

export const Context = createContext();

export function ContextProvider (props) {
  const [ houseActiveIndex, setHouseActiveIndex ] = useState(0);
  const [ plantActiveIndex, setPlantActiveIndex ] = useState(0);
  const [ plants, setPlants ] = useState(['Basil', 'Beets', 'Scallion']);
  const [ houses, setHouses ] = useState(["House", "Apartment", "Town House"]);
  const [ plant, setPlant ] = useState(plants[0].toLowerCase());
  const [ house, setHouse ] = useState(houses[0].toLowerCase());
  const [ value, setValue ] = useState(1);
  const [ date, setDate ] = useState(dateFromDay(2021, 1))
  const [ time, setTime ] = useState(0);

  useEffect(() => {
    setPlant(plants[plantActiveIndex].toLowerCase());
  }, [plantActiveIndex, plants])

  useEffect(() => {
    const house = houses[houseActiveIndex] === "Town House" ? "town_house" : houses[houseActiveIndex].toLowerCase();
    setHouse(house);
  }, [houseActiveIndex, houses])

  useEffect(() => {
    setDate(dateFromDay(2021, value))
  }, [value])

  return(
    <Context.Provider value={{
      houseActiveIndex,
      setHouseActiveIndex,
      plantActiveIndex,
      setPlantActiveIndex,
      plant,
      house,
      plants,
      houses,
      time,
      date,
      value,
      setValue
    }}>
      {props.children}
    </Context.Provider>
  )
}
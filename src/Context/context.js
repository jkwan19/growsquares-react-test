import React, {
  useEffect,
  useState,
  createContext
} from 'react';

const plants = ['Basil', 'Beets', 'Scallion'];
const houses = ["House", "Apartment", "Town House"];

export const Context = createContext();

export function ContextProvider (props) {
  const [ houseActiveIndex, setHouseActiveIndex ] = useState(0);
  const [ plantActiveIndex, setPlantActiveIndex ] = useState(0);
  const [ plant, setPlant ] = useState(plants[0]);
  const [ house, setHouse ] = useState(houses[0]);

  useEffect(() => {
    setPlant(plants[plantActiveIndex]);
  }, [plantActiveIndex])

  useEffect(() => {
    setHouse(houses[houseActiveIndex]);
  }, [houseActiveIndex])

  return(
    <Context.Provider value={{
      houseActiveIndex,
      setHouseActiveIndex,
      plantActiveIndex,
      setPlantActiveIndex,
      plant,
      house
    }}>
      {props.children}
    </Context.Provider>
  )
}
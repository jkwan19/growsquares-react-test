import React, {
  useEffect,
  useState,
  createContext
} from 'react';

export const Context = createContext();

export function ContextProvider (props) {
  const [ houseActiveIndex, setHouseActiveIndex ] = useState(0);
  const [ plantActiveIndex, setPlantActiveIndex ] = useState(0);
  const [ plants, setPlants ] = useState(['Basil', 'Beets', 'Scallion']);
  const [ houses, setHouses ] = useState(["House", "Apartment", "Town House"]);
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
      house,
      plants,
      houses
    }}>
      {props.children}
    </Context.Provider>
  )
}
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
  const [ plant, setPlant ] = useState(plants[0].toLowerCase());
  const [ house, setHouse ] = useState(houses[0].toLowerCase());

  useEffect(() => {
    setPlant(plants[plantActiveIndex].toLowerCase());
  }, [plantActiveIndex, plants])

  useEffect(() => {
    const house = houses[houseActiveIndex] === "Town House" ? "town_house" : houses[houseActiveIndex].toLowerCase();
    setHouse(house);
  }, [houseActiveIndex, houses])

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
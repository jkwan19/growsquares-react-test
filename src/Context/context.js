import React, { useState, createContext } from 'react';

export const Context = createContext();

export function ContextProvider (props) {
  const [ houseActiveIndex, setHouseActiveIndex ] = useState(0);
  const [ plantActiveIndex, setPlantActiveIndex ] = useState(0);

  return(
    <Context.Provider value={{
      houseActiveIndex,
      setHouseActiveIndex,
      plantActiveIndex,
      setPlantActiveIndex
    }}>
      {props.children}
    </Context.Provider>
  )
}
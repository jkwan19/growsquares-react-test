import React from 'react';
import './App.css';

import Description from './Components/Description';
import Video from './Components/Video';
import HouseBar from './Components/HouseBar';
import PlantSelection from './Components/PlantSelection';

const App = () => {
  return (
    <div id='app'>
      <div className="left">
        <Video />
      </div>
      <div className="right">
        <Description />
        <div className="bottom-right">
          <PlantSelection />
        </div>
      </div>
    </div>
  )
}

export default App;
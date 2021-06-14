import React, { useState } from 'react';
import './App.css';
import { Context } from './Context/context';

import Description from './Components/Description';
import Video from './Components/Video';
import PlantSelection from './Components/PlantSelection';
import DragScroll from './Components/DragScroll';

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
          <DragScroll />
        </div>
      </div>
    </div>
  )
}

export default App;
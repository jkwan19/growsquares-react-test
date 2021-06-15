import React from 'react';
import './App.css';

import Description from './Components/Description';
import Video from './Components/Video';
import PlantSelection from './Components/PlantSelection';
import DragScroll from './Components/DragScroll';

const App = () => {
  return (
    <div id='app'>
      <div className="flex-container">
        <Video />
        <Description />
        <div className="flex-child rect bottom-right">
          <PlantSelection />
          <DragScroll />
        </div>
      </div>
    </div>
  )
}

export default App;
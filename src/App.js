import React from 'react';
import './App.css';

import Description from './Components/Description';
import Video from './Components/Video';

const App = () => {
  return (
    <div id='app'>
      <div className="left">
        <Video />
      </div>
      <div className="right">
        <Description />
      </div>
    </div>
  )
}

export default App;
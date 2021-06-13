import React from 'react';
import './App.css';

import Description from './Components/Description';

const App = () => {
  return (
    <div id='app'>
      <div className="left">
      </div>
      <div className="right">
        <Description />
      </div>
    </div>
  )
}

export default App;
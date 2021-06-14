import React, { useContext } from 'react';
import './Video.css';
import { Context } from '../Context/context';

import HouseBar from './HouseBar';

const Video = () => {

  const { house, plant, time } = useContext(Context);

  return (
    <div className="video_container">
      <video className="video" src={process.env.PUBLIC_URL + `/assets/videos/env_plant_${plant}_${house}.mp4#t=${time}`} />
      <HouseBar />
    </div>
  )
};

export default Video;
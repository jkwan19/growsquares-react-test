import React, { useContext } from 'react';
import './Video.css';
import { Context } from '../Context/context';

import HouseBar from './HouseBar';

const Video = () => {

  const { house, plant, time, setVideoDuration } = useContext(Context);

  return (
    <div className="flex-child square">
      <video
        className="video"
        src={process.env.PUBLIC_URL + `/assets/videos/env_plant_${plant}_${house}.mp4#t=${time}`}
        onLoadedMetadata={e => {
          setVideoDuration(e.target.duration)
        }}
        />
      <HouseBar />
    </div>
  )
};

export default Video;
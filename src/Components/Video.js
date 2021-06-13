import React from 'react';
import './Video.css';

import HouseBar from './HouseBar';

const Video = () => {
  return (
    <div className="video_container">
      <video className="video" src={process.env.PUBLIC_URL + '/assets/videos/env_plant_basil_apartment.mp4'} />
      <HouseBar />
    </div>
  )
};

export default Video;
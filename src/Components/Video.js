import React, { useContext } from 'react';
import './Video.css';
import { Context } from '../Context/context';

import HouseBar from './HouseBar';

const Video = () => {

  const { house, plant } = useContext(Context);

  return (
    <div className="video_container">
      <video className="video" src={process.env.PUBLIC_URL + '/assets/videos/env_plant_basil_apartment.mp4'} />
      <HouseBar />
    </div>
  )
};

export default Video;
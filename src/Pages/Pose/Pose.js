import React from 'react';
import Camera from '../../Components/Camera/Camera';

function Pose() {
    // start variable for the video
    const [start, setStart] = React.useState(false);
    const [pose, setPose] = React.useState(window.location.href.split('=')[1].split('&')[0]);
    const [practice, setPractice] = React.useState(window.location.href.split('=')[2]);
  return <div>
    <div className="page_logo_container">
    <img className="page_logo" src="../Logo.svg"/>
    <div className="page_logo_text">{practice} :  {pose}</div>
    </div>
      
      <div className="container">

          {/* a layout for video feed */}
            <div className="video_container">
                <div className="video_feed">
                    <Camera start={start} setStart={setStart} pose={pose} practice={practice} activity="data collection"/>
                </div>
                
            </div>
      </div>
  </div>;
}

export default Pose;

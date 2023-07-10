import React from 'react';
import Camera1 from '../../Components/Camera/Camera1';

function Train() {
    
    // start variable for the video
    const [start, setStart] = React.useState(false);
    const [practice, setPractice] = React.useState(window.location.href.split('=')[1]);
  return <div>
      <div className="page_logo_container">
    <img className="page_logo" src="../Logo.svg"/>
    <div className="page_logo_text">{practice}</div>
    </div>
      <div className="container">

          {/* a layout for video feed */}
            <div className="video_container">
                <div className="video_feed">
                    <Camera1 start={start} setStart={setStart} practice={practice} activity="training"/>
                    
                </div>
                
            </div>
      </div>
  </div>;
}

export default Train;

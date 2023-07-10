import React, {useRef, useEffect, useState} from 'react'

function Camera(props) {

    const {start , setStart, pose , practice, activity} = props;

    const [traninig, setTraining] = useState(false);
    const [src, setSrc] = useState("http://localhost:5000/mp_video_feed?practice=" + practice + "&pose=" + pose );

    //define the lunch training function
    function lunchTraining() {
        //lunch the traini from the server
        fetch('http://localhost:5000/api/coach/startTraining', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                practice: practice,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.accuracy);
                let message = "The training was : successful with an accuracy of :" + data.accuracy;
                alert(message);
            }
            );
    }

    
    return (
        <div className="camera_feed_container">
            {/* show video if start is true */}
            {start && <img className="camera_feed" src={src} width="100%"/>}
            {/* show button to start video feed */}
            {!start && <button className="video_feed_button" onClick={() => {setStart(true)}}>Start {activity}</button>}
            {/* show button to stop video feed */}
            {start && <button className="video_feed_button" onClick={() => {setStart(false); setTraining(true)}}>Stop {activity}</button>}
            {/* show button to lunch model training */}
            {traninig && <button className="video_feed_button" onClick={lunchTraining}>Train Model</button>}
        </div>
    )
}

export default Camera

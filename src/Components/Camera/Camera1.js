import React, {useRef, useEffect, useState} from 'react'

function Camera1(props) {
    //create poseClass usestate variable
    const [poseClass, setPoseClass] = React.useState("");
    //create poseProb usestate variable
    const [poseProb, setPoseProb] = React.useState(0);

    const {start , setStart , practice, activity} = props;

    const [traninig, setTraining] = useState(false);
    const [src, setSrc] = useState("http://localhost:5000/api/trainee/trainMe");

    // load model from server
    useEffect(() => {
        fetch('http://localhost:5000/api/trainee/loadModel', {
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
                console.log(data);
            }
            );
    }, []);

    // create a periodic function to get the pose stats
    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:5000/api/trainee/getPoseStats', {
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
                    console.log(data);
                    setPoseClass(data.class);
                    setPoseProb(data.stats);
                }
                );
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="camera_feed_container">
            <div className="camera_containor">
            {/* show video if start is true */}
            {start && <img className="camera_feed" src={src} width="100%"/>}
            {/* show button to start video feed */}
            {!start && <button className="video_feed_button" onClick={() => {setStart(true)}}>Start {activity}</button>}
            {/* show button to stop video feed */}
            {start && <button className="video_feed_button" onClick={() => {setStart(false); setTraining(true)}}>Stop {activity}</button>}
            </div>
            {/* block to display stats */}
            {start && <div className="stats_container">
                <div className="stats_text_title">Pose :</div>
                <div className="stats_text_value">{poseClass}</div>
                <div className="stats_text_title">Prob :</div>
                <div className="stats_text_value">{poseProb}</div>
            </div>}

        </div>
    )
}

export default Camera1

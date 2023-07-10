import React from 'react';
import Popup1 from '../../Components/Popup/Popup1';

function Practice(props) {
    const [poses, setPoses] = React.useState([]);
    const [practice, setPractice] = React.useState(window.location.href.split('=')[1]);

    //define gotoPose function
    function gotoPose(pose) {
        //redirect to the pose page and send the pose name in the params
        window.location.href = '/CoachHome/Pose?pose=' + pose + '&practice=' + practice;
    }

    //fetch poses from server for the selected practice
    React.useEffect(() => {
        fetch('http://localhost:5000/api/coach/getPoses', {
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
                console.log(data.poses);
                setPoses(data.poses.split(':'));
            });
    }, []);


    const [isOpen, setIsOpen] = React.useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
  return <div>
    <div className="page_logo_container">
        <img className="page_logo" src="../Logo.svg"/>
        <div className="page_logo_text">{practice}</div>
    </div>
      <div className="coach_home_container">
      {/*display practices from the array of strings practices*/}
      <div className='coach_home_poses'>
      {poses.map((pose, index) => {
        return <div className='coach_home_pose_name' key={index} onClick={() =>{gotoPose(pose)}}>{pose}</div>
      })}
      <div className='coach_home_pose_name' onClick={togglePopup}>Add Pose</div>
      {isOpen && <Popup1 practice={practice}
      handleClose={togglePopup}
    />}
      </div>
    </div>
  </div>;
}

export default Practice;

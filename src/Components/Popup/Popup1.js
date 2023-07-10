import React, { useEffect } from 'react';

function Popup1(props) {
  //get the practice name from props
  const { practice } = props;
  
  // define the add practice function
  const addPose = (event) => {
    event.preventDefault();
    // get the practice name
    const pose = document.getElementById('poseName').value;
    // send the practice name to the server
    console.log(practice)
    fetch('http://localhost:5000/api/coach/addPose', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        practice: practice,
        name: pose,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if the server returns a success message, redirect to the practice page
        window.location.href = '/CoachHome/Practice?practice=' + practice;
      });
  };

  // define the hide popup function
  const hidePopup = (event) => {
    event.preventDefault();
    // hide the popup

    document.getElementsByClassName('popup-box')[0].style.display = 'none';
  };


  return (
    <div className="popup-box">
      <div className="box">
        {/*create a form to enter the name of the new practice*/}
        <form className='popup_form' >
          <div className="input-container">
            <label htmlFor="name">Enter new pose name :</label>
            <input type="text" id="poseName" />
            <button className="submit-button" onClick={addPose}>Submit</button>
            <button className="cancel-button" onClick={hidePopup}>Cancel</button>
          </div>
          </form>
      </div>
    </div>
  );
}

export default Popup1;

import React, { useEffect } from 'react';

function Popup() {
  // define the add practice function
  const addPractice = (event) => {
    event.preventDefault();
    // get the practice name
    const practiceName = document.getElementById('practiceName').value;
    
    // send the practice name to the server
    fetch('http://localhost:5000/api/coach/addPractice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: practiceName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if the server returns a success message, redirect to the practice page
        window.location.href = '/CoachHome';
      });
  };

  // define the hide popup function
  const hidePopup = (event) => {
    event.preventDefault();
    console.log('hide popup');
    // hide the popup
    document.getElementsByClassName('popup-box')[0].style.display = 'none';
  };


  return (
    <div className="popup-box">
      <div className="box">
        {/*create a form to enter the name of the new practice*/}
        <form className='popup_form'>
          <div className="input-container">
            <label htmlFor="name">Enter new practice name :</label>
            <input type="text" id="practiceName" />
            <button className="submit-button" onClick={addPractice}>Submit</button>
            <button className="cancel-button" onClick={hidePopup}>Cancel</button>
          </div>
          </form>
      </div>
    </div>
  );
}

export default Popup;

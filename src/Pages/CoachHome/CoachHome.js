import React from 'react';
import Popup from '../../Components/Popup/Popup';

function CoachHome() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  
  // create a state for practices
  const [practices, setPractices] = React.useState([]);
  // create a state for the selected practice
  const [selectedPractice, setSelectedPractice] = React.useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // fetch practices from the server
  React.useEffect(() => {
    fetch('http://localhost:5000/api/coach/getPractices', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data['Practices']);
        // slice the data['Practices'] to an array of strings and stre it in practices
        setPractices(data['Practices'].split(':'));

      });
  }
  , []);

  //defien the gotoPractice function
  const gotoPractice = (practice) => {
    // set the selectedPractice to the practice
    setSelectedPractice(practice);
    // navigate to the practice page and send the practice name in the params
    window.location.href = '/CoachHome/Practice?practice=' + practice;
  }

  return <div>
    <div className="page_logo_container">
    <img className="page_logo" src="./Logo.svg"/>
    <div className="page_logo_text">Practices</div>
    </div>
    {/* create a containor for the page centering all the countents */}
    <div className="coach_home_container">
      {/*display practices from the array of strings practices*/}
      <div className='coach_home_practices'>
      {practices.map((practice, index) => {
        return <div className='coach_home_practice_name' key={index} onClick={() =>{gotoPractice(practice)}}>{practice}</div>
      })}
      <div className='coach_home_practice_name' onClick={togglePopup}>Add Practice</div>
      {isOpen && <Popup
      handleClose={togglePopup}
    />}
      </div>
    </div>
  </div>;
}

export default CoachHome;

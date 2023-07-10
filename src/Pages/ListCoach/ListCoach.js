import React from 'react';

function ListCoach() {

    //get the coaches list from backend
    const [coaches, setCoaches] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:5000/coaches')
            .then((res) => res.json())
            .then((data) => {
                setCoaches(data['coaches'].split(":"));
            });
    }, []);

  return <div> 
      <div className="page_logo_container">
    <img className="page_logo" src="./Logo.svg"/>
    <div className="page_logo_text">Practices</div>
    </div>
    {/* create a containor for the page centering all the countents */}
    <div className="coach_home_container">
        {/*display practices from the array of strings practices*/}
        <div className='coach_home_practices'>
        {coaches.map((coach, index) => {
        return <div className='coach_home_practice_name' key={index} >{coach}</div>
        })}
        <div className='coach_home_practice_name' >Add Coach</div>
        
        </div>
  </div></div>;

}

export default ListCoach;

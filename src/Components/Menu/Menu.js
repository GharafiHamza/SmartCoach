//create a header menu functional componnenent
//create a footer menu functional componnenent

import React from 'react';

function Menu() {
  return <div>
      {/*creat a menu bar <ith multiple link buttons with classNames for CSS*/}
        <ul className="menu">
            {/*classname menu-items contain links for other pages */}
            <li className="menu-items">
                <a href="/CoachHome">Home</a>
            </li>
            <li className="menu-items">
                <a href="/SmartCoach">Smart Coach</a>
            </li>
            <li className="menu-items">
                <a href="/SelectSport">Select Sport</a>
            </li>
            <li className="menu-items">
                <a href="/">Contact</a>
            </li>

        </ul>
  </div>;
}

export default Menu;

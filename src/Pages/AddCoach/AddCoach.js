import React, { useState, useContext, useEffect } from 'react'
import { unstable_HistoryRouter } from 'react-router-dom';
import axios from 'axios';

function AddCoach() {
    //create a state to navigate to the login page after registering

    const axios_ = axios.create({
        baseURL: 'http://localhost:5000',
        headers: { 'Content-Type': 'application/json' },
      })
      

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhoneNumber(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
       //send a post request to the server with the data from the form using axios
        axios_.post('/api/users/register', {
            username: username,
            password: password,
            email: email,
            phonenumber: phoneNumber
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            // navigate to /login link
            window.location.href = '/login';
        })
        .catch(err => {
            console.log(err);
        })

      }

    useEffect(() => {checkLog()},[])
    function checkLog() {
        
    }

    return (
        <div className="login_box">
            <img className="login_box_logo" src="./Logo.svg"/>
            <div className="login_box_undertitle">Add new Coach</div>
            <form onSubmit={handleSubmit} >
                <div className="login_box_input_container">
                    <label htmlFor="username" className="login_box_input_label">Username</label>
                    <input type="text" id="username" className="login_box_input" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="login_box_input_container">
                    <label htmlFor="password" className="login_box_input_label">Password</label>
                    <input type="password" id="password" className="login_box_input" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="login_box_input_container">
                    <label htmlFor="email" className="login_box_input_label">Email</label>
                    <input type="email" id="email" className="login_box_input" value={email} onChange={handleEmailChange} />
                </div>
                <div className="login_box_input_container">
                    <label htmlFor="phonenumber" className="login_box_input_label">PhoneNumber</label>
                    <input type="phone" id="phonenumber" className="login_box_input" value={phoneNumber} onChange={handlePhoneChange} />
                </div>
                <input type="submit" className="login_box_submit" value="Add Coach" />
            </form>
        </div>
    )
}

export default AddCoach

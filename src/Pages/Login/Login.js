import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'

function Login() {
    const axios_ = axios.create({
        baseURL: 'http://localhost:5000',
        headers: { 'Content-Type': 'application/json' },
      })


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        //login by cheking if the user exists and if the password is correct from the server
        //if the user exists and the password is correct, the user is logged in
        //if the user exists and the password is incorrect, the user is not logged in
        //if the user does not exist, the user is not logged in
        axios_.post('/api/users/login', {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            // navigate to /Home link
            //if response status is 200, the user is logged in
            if(res.status === 200) {
                //check role and then redirect to the right page
                console.log(res.data.role);
                if(res.data.role === 'Trainee') {
                    window.location.href = '/';
                } else {
                    window.location.href = '/CoachHome';
                }
            }
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
            <form onSubmit={handleSubmit} >
                <div className="login_box_input_container">
                    <label htmlFor="username" className="login_box_input_label">Username</label>
                    <input type="text" id="username" className="login_box_input" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="login_box_input_container">
                    <label htmlFor="password" className="login_box_input_label">Password</label>
                    <input type="password" id="password" className="login_box_input" value={password} onChange={handlePasswordChange} />
                </div>
                <input type="submit" className="login_box_submit" value="Sign in" />
            </form>
            {/*create text and button for user with no acount*/}
            <div className="login_box_no_account">
                <div className="login_box_no_account_text">Don't have an account?</div>
                <div className="login_box_no_account_button" onClick={() => window.location.href = '/signup'}>Sign up</div>
            </div>
        </div>
    )
}

export default Login

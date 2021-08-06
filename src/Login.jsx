import React from 'react';
import './Login.css';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';

const Login= () => {

    return(
        <div className="login">
            <LoginPassword />
        </div>
    )
}

export default Login;
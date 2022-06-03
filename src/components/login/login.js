import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return <div id="login-page">
        <div className="login-reg-panel">
            <div className="white-panel">
                <div className="login-show">
                    <h2>LOGOWANIE</h2>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Hasło"/>
                    <a id='forgot-password' href="">Zapomniałeś hasła?</a>
                    <Link to='/home'><input type="button" value="Zaloguj"/></Link>
                </div>
            </div>
        </div>
    </div>
}

export default Login;
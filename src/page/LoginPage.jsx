import React, { useState } from 'react'
import './loginpage.css'
import FacebookLogin from 'react-facebook-login'
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const [data, setData] = useState({})
    const [picture, setPicture] = useState('')
    const [login, setLogin] = useState(false)
    var navigate = useNavigate();

    const responseFacebook = (response) => {
       
        console.log(response);
        if (response.status === "unknown") {
            alert("Login failed!");
            setLogin(false);
            return false;
        }
        setData(response);
        setPicture(response.picture.data.url)
        if (response.accessToken) {
            setLogin(true)
            navigate(
                '/upload',
                {state: response}
            )
        } else {
            setLogin(false)
        }
    }

    const logout = () => {
        setLogin(false);
        setData({});
        setPicture("");
    };

    return (
        <>
            <div id="login-box">
                <div className="left">
                    <h1 className="signuph1">Sign up</h1>

                    <input className="inputtext" type="text" name="username" placeholder="Username" />
                    <input className="inputtext" type="text" name="email" placeholder="E-mail" />
                    <input className="inputpass" type="password" name="password" placeholder="Password" />
                    <input className="inputpass" type="password" name="password2" placeholder="Retype password" />
                    <input type="submit" name="signup_submit" value="Sign me up" />
                </div>

                <div className="right">
                    <span className="loginwith">Sign in with<br />social network</span>
                    <FacebookLogin
                        className="social-signin facebook"
                        appId="912472183009381"
                        autoLoad={false}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        cssClass="social-signin facebook"
                    />
                    {/* <button className="social-signin facebook">Log in with facebook</button> */}
                    <button className="social-signin twitter">Log in with Twitter</button>
                    <button className="social-signin google">Log in with Google+</button>
                </div>
                <div className="or">OR</div>

            </div>
            < div>




            </div>
        </>
    )
}

export default LoginPage

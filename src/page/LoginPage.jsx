import React, { useState } from 'react'
import './loginpage.css'
import FacebookLogin from 'react-facebook-login'

const LoginPage = () => {
    const [data, setData] = useState({})
    const [picture,setPicture] = useState('')
    const [login,setLogin] = useState(false)

const responseFacebook = (response)=>{
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url)
    if(response.accessToken){
        setLogin(true)
    }else{
        setLogin(false)
    }
}

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
                
                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
            </div>
            <div className="or">OR</div>
            
        </div>
        < div>
         <FacebookLogin
         className="social-signin facebook"
         appId="912472183009381"
         autoLoad={true}
         fields="name,email,picture"
         scope="public_profile,user_friend"
         callback={responseFacebook}
         />
         </div>
         </>
    )
}

export default LoginPage

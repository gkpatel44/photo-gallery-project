import React from 'react'
import { Route,Redirect } from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route  {...rest} render ={props=>{
            const token= localStorage.getItem('token')
            if(!token){
                return <Redirect to={{pathname:'loginpage'}}/>
            }
            return <Component {...props}/>
        }}/>
    )
}

export default PrivateRoute

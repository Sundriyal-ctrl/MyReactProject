import React,{useState} from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login';
export default function LogGoo() {
    const clientid="610878396357-fehagl14gvqt6adatss5kbph4p0qj7el.apps.googleusercontent.com";
    const onLoginSuccess=(res)=>{
       
    }
    const onLogoutSuccess=(res)=>{
        
    }
    return (
        <div>
            <GoogleLogin
            className="btn-block my-2"
    clientId={clientid}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onLogoutSuccess}
    cookiePolicy={'single_host_origin'}
  />
        </div>
    )
}
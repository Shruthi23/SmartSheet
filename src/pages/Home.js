import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { oktaConfig } from '../config';


const Home=()=>{
    console.log("Home page")
   
    const {authState,oktaAuth}=useOktaAuth()
    const logout=()=>{
        console.log("signout")
        oktaAuth.signOut({
            postLogoutRedirectUri: `https://localhost:8080`
          });
    }
    const login=()=> 
    {
        //oktaAuth.signIn()
        oktaAuth.signInWithRedirect({originalUri:"/profile"})
       //oktaAuth.signInWithRedirect()
}
    if(!authState){
       
    return(
        <div>
            Loading
        </div>
    )
    }
    else if(!authState.isAuthenticated){
        return(
            <button onClick={login}>Login</button>
        )
    }
    else{
        console.log("Authtstate-->",authState)
       return(
           <button onClick={logout}>Signout</button>
       )
    }
}
    
export default Home
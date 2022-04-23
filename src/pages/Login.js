
import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';





const Login=()=>{
    _handleSubmit=()=>{
        console.log("handlsubmit")

    }
    return(
        <div>
            <h2>Login Page</h2>

            <button onClick={_handleSubmit()}>Login</button>

        </div>
    )
}
export default Login
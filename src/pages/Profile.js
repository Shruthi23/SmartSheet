import React, { Component,useEffect,useState } from 'react';
//import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const  Profile=()=>{
    const {authState,oktaAuth}=useOktaAuth();
    const [userInfo,setInfo]=useState(null)
    const [message, setmessage] = useState([])
    useEffect(() => {
        if(!authState || !authState.isAuthenticated){
            setInfo(null)
        }
        else{
            oktaAuth.getUser().then(res=>{
                setInfo(res)
            })
        }
    },[authState,oktaAuth])
    if(!userInfo){
        return(
        <div>
            <h2>Fetching user details</h2>
        </div>
        )

    }
    else{
    return(
        <div>
            User details fetched

        </div>
    )
    }

}
export default Profile;
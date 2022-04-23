import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import{Security,LoginCallback,SecureRoute} from '@okta/okta-react'
import {OktaAuth,toRelativeUrl} from '@okta/okta-auth-js'

import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import {oktaConfig} from '../src/config'
const CALLBACK_PATH = "/login/callback";




 

const App = () => {
  const history=useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  const okta= new OktaAuth(oktaConfig)
  return(
  <div>
      <Security oktaAuth={okta} restoreOriginalUri={restoreOriginalUri}>
        <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
         <Route path="/" exact component={Home}/>
         <Route path={CALLBACK_PATH} exact component={LoginCallback} />
         <SecureRoute path="/profile" component={Profile}/>
        </Switch>
        </Router>
      </Security>
      
    </div>
  )
}

  

export default App;
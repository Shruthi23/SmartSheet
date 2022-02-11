import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from '../src/pages/Home'
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
    <Router>
    <Route path="/" exact={true} component={Home} />
    {/* <SecureRoute path="/details" component={Details}/>
   */}
    </Router>
    </div>
  );
}

export default App;

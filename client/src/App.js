import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;

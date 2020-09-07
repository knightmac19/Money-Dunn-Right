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




function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;

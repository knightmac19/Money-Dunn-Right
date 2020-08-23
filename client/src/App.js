import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login';


function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/Login" component={Login} />
        </Switch>
      
    </Router>
  );
}

export default App;
